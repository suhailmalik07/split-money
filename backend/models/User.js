const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  email: {
    type: String,
    min: 4,
    max: 255,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 4,
    max: 255,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
