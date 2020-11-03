const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    min: 4,
    max: 255
  },
  password: {
    type: String,
    min: 4,
    max: 255
  }
})

module.exports = mongoose.model('User', userSchema)