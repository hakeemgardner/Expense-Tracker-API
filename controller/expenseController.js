const Expense = require("./../models/expenseModel");

exports.getAllExpenses = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj(el));

    const expense = await Expense.find(queryObj);
  } catch (err) {}
};

exports.createExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        expense: newExpense,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const updateExpense = await Expense.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      status: "success",
      expense: updateExpense,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const delExpense = await Expense.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
