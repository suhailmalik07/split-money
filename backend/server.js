const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

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
app.use(cors());

app.use("/api", expenseRoutes);
app.use("/api/users", userRoutes);

app.listen(8000, () => {
  console.log("server is up an running!");
});
