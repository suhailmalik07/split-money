const Expense = require("../models/Expense");
const User = require("../models/User");

//default user id = '5fa12ec376800e48644b82aa'
// this is my logged user id not getting from frontend
const id = "5fa12ec376800e48644b82aa";

const getExpenses = async (req, res) => {
  // provide user balance, owned and ow
  try {
    const currUser = await User.findById(id);

    const results = {
      owesYou: 0,
      youOwe: 0,
      balance: 0,
    };
    const expenses = await Expense.find({ "details.user": id }).populate(
      "details.user"
    );

    expenses.forEach((expense) => {
      const totalAmount = expense.totalAmount;
      const userPart = expense.details.find((item) => item.user._id == id);
      const isIPaid = userPart.paid > 0;

      if (isIPaid) {
        results.owesYou += totalAmount - userPart.toPay;
      } else {
        results.youOwe += userPart.toPay;
      }
    });

    results.balance = results.youOwe - results.owesYou;
    results.expenses = expenses;

    res.json(results);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

const addExpense = async (req, res) => {
  // add new expense, it is going to need list of usersId and amount paid and due
  /*
  EX - {totalAmount: 250, details: [{user: id1, toPay: 0, paid: 250}, {user: id2, toPay: 125, paid: 0}]}
  */
  const { totalAmount, details, name } = req.body;

  console.log(totalAmount, details, name)

  try {
    const expense = await new Expense({
      name,
      totalAmount,
      details: details,
    }).save();
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

module.exports = { getExpenses, addExpense };
