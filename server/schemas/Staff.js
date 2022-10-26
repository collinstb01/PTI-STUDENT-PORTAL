const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Staff = new Schema({
  staff_name: String,
  staff_profile_picture: String,
  email: String,
  id: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: {
      values: ["Admin", "Moderator"],
      message: "{VALUE} is not supported",
    },
  },
});

const staff = mongoose.model("staffs", Staff);

module.exports = staff;
