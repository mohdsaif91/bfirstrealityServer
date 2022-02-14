const mongoose = require("mongoose");

const loginModal = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
});

const LoginSchema = mongoose.model("login", loginModal);

module.exports = LoginSchema;
