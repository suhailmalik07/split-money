const User = require("../models/User")


const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

module.exports = { getUsers }