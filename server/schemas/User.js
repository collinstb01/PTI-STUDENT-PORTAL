const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  student_name: String,
  email: String,
  state_of_origin: String,
  dept: String,
  password: String,
  home_address: String,
  receipts: {
    type: Array,
  },
  session: String,
  hostel_name: String,
});

const user = mongoose.model("students", User);

module.exports = user;
