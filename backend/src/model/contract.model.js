const mongoose = require("mongoose");

const contractSchema = mongoose.Schema({
  img: String,
  type: String,
  head: String,
  name: String,
});

const contractModel = mongoose.model("contracts", contractSchema);

module.exports = contractModel;
