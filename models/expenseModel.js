const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  totalSpent: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
