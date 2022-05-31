const mongoose = require("mongoose");
const { Number, String, ObjectId } = mongoose.Schema.Types;

const schema = new mongoose.Schema({
  rowPosition: Number,
  columnPosition: Number,
  name: String,
});

module.exports = mongoose.model("Spot", schema);
