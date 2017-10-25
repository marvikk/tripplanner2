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
  lon: {
    type: Number,
    default: null
  },
  image: {
    type: String,
    default: "Unknown"
  }
});

module.exports = { Destination };
