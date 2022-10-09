const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Hostels = new Schema({
  hostel_name: {
    type: String,
    unique: true,
  },
  block: String,
  available: Boolean,
  occupants: Array,
  no_of_occupants: Number,
  sex: String,
  location: String,
  valid_occupant: Number,
});

const hostels = mongoose.model("hostels", Hostels);

module.exports = hostels;
