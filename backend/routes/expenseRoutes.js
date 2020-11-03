const express = require("express");
const { addExpense, getExpenses } = require("../controllers/expense-controller");

const routes = express.Router();

routes.get("/", getExpenses);
routes.post("/", addExpense);

module.exports = routes;
