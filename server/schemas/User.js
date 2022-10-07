const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  student_name: String,
  email: String,
  receipts: {
    type: Array,
  },
  session: String,
  dept: String,
});

const user = mongoose.Model("students", User);

module.exports = user;
