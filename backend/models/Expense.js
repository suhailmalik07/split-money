const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  totalAmount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  details: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      toPay: {
        type: Number,
        min: 0,
        max: 10000,
      },
      paid: {
        type: Number,
        min: 0,
        max: 10000,
      },
    },
  ],
});

module.exports = mongoose.model("Expense", expenseSchema);
