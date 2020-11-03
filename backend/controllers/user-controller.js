const User = require("../models/User");

const getUsers = async (req, res) => {
  // get all users
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

const addUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await new User({ name, email, password }).save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

module.exports = { getUsers, addUser };
