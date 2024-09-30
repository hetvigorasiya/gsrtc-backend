var mongoose = require("mongoose");

const TicketBookingSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    require: true,
  },
  mobileNumber:{
    type: Number,
    require: true,
  },
  name:{
    type: String,
    require: true,
  },
  start:{
    type: String,
    require: true,
  },
  destination: {
    type: String,
    require: true,
  },
  deptTime:{
    type: Date,
    require:true,
  },
  bookingDate: {
    type: Date,
    require: true,
  },
  seatsBooked: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("busTicket", TicketBookingSchema);
