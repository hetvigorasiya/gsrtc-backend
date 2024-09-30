var mongoose = require("mongoose");

const busRouteSchema = new mongoose.Schema({
  start: {
    type: String,
    require: true,
  },
  destination: {
    type: String,
    require: true,
  },
  deptTime: {
    type: Date,
    require: true,
  },
  busType: {
    type: String,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  fare: {
    type: Number,
    require: true,
  },
  availableSeats:{
    type: Number,
    require: true,
  }
});

module.exports = mongoose.model('busRoute',busRouteSchema)
