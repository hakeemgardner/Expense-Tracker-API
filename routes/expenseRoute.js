const express = require("express");
const router = express.Router();
const expenseController = require("./../controller/expenseController");

router
  .route("/")
  .get(expenseController.getAllExpenses)
  .post(expenseController.createExpense);
router
  .route("/:id")
  .put(expenseController.updateExpense)
  .delete(expenseController.deleteExpense);

module.exports = router;
