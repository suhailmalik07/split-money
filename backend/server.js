const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { getUsers, addUser } = require("./controllers/user-controller");
const { addExpense, getExpenses } = require("./controllers/expense-controller");

const app = express();

dotenv.config();

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (error) => {
    if (error) return console.error(error);
    console.log("DB connected");
  }
);

app.use(express.json());

app.get("/api/users", getUsers);
app.post("/api/users", addUser);

app.get("/api", getExpenses);
app.post("/api", addExpense);

app.listen(8000, () => {
  console.log("server is up an running!");
});
