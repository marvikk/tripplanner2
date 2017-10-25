var mongoose = require("mongoose");

var MarkerRoutes = mongoose.model("MarkerRoutes", {
  name: {
    type: String,
    default: "Unknown"
  },
  routes: [{
    type : Array ,
    default : []
  }],

});

module.exports = { MarkerRoutes };
