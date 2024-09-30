const TicketDetails = require("../model/TicketBooking");

exports.ticketBooking = async (req, res) => {
  try {
    const {
      userEmail,
      name,
      mobileNumber,
      start,
      destination,
      deptTime,
      seatsBooked,
    } = req.body;

    const data = await TicketDetails.findOne({
      start: start,
      destination: destination,
      deptTime: { $gte: new Date(req.body, deptTime) },
    });

    if (!data) {
      return res.json({ message: "Route not found" });
    }

    if (data.availableSeats < seatsBooked) {
      return res.json({ message: "Not enough seats available" });
    }

    const Booking = await TicketDetails.create({
      userEmail: userEmail,
      name: name,
      mobileNumber: mobileNumber,
      start: start,
      destination: destination,
      deptTime: deptTime,
      seatsBooked: seatsBooked,
    });

    data.availableSeats -= seatsBooked;

    res.json({
      message: "seats booked successfully",
      success: true,
      data: Booking,
    });
  } catch (err) {
    res.json({
      message: "faild to booking seat",
      success: false,
    });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const { userEmail } = req.params;

    const Booking = await TicketDetails.findOne({
      userEmail,
    });

    res.json({
      message: "seats booked successfully",
      success: true,
      data: Booking,
    });
  } catch (err) {
    res.json({
      message: "faild to get your booking details",
      success: false,
    });
  }
};
