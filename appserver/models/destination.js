var mongoose = require("mongoose");

var Destination = mongoose.model("Destination", {
  name: {
    type: String,
    default: "Unknown"
  },
  lat: {
    type: Number,
    default: null
  },
  long: {
    type: Number,
    default: null
  }
});

module.exports = { Destination };
