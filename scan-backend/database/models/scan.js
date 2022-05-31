const mongoose = require("mongoose");
const { Number, String, Date, ObjectId } = mongoose.Schema.Types;

const Spot = require("./spots");

const schema = new mongoose.Schema({
  platform: String,
  territory: String,
  date: Date,
  spots: [
    {
      type: ObjectId,
      ref: Spot,
    },
  ],
});

module.export = mongoose.model("Scan", schema);
