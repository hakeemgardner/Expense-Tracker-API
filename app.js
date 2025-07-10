const express = require("express");
const app = express();

const authRoute = require("./routes/authRoute");
const expenseRoute = require("./routes/expenseRoute");
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/expenses", expenseRoute);
module.exports = app;
