const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codeSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
});

const code = mongoose.model("codes", codeSchema);

module.exports = code;
