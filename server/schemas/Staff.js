const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Staff = new Schema({
  staff_name: String,
  staff_profile_picture: String,
  email: String,
  id: String,
  role: String,
});

const staff = mongoose.model("students", Staff);

module.exports = staff;
