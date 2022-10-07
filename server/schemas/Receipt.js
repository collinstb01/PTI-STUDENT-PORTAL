const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Receipt = new Schema({
  name: String,
  owner: String,
  paid: Boolean,
  amount: Number,
  status: String,
});

const receipt = mongoose.model("receipt", Receipt);

module.exports = receipt;
