const mongoose = require("mongoose");

module.exports = {
  configure: () =>
    mongoose.connect("mongodb://127.0.0.1:27017/scan", (err) => {
      debugger;
      console.log(err?.message?.toString());
    }),
};
