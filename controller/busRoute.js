const busRouteDetails = require("../model/busRoute");

exports.addBusRoute = async (req, res) => {
  try {
    const {
      start,
      destination,
      deptTime,
      busType,
      duration,
      fare,
      availableSeats,
    } = req.body;

    const data = await busRouteDetails.create({
      start: start,
      destination: destination,
      deptTime: deptTime,
      busType: busType,
      duration: duration,
      fare: fare,
      availableSeats: availableSeats,
    });
    res.json({
      message: "bus route available",
      success: true,
      data: data,
    });
  } catch (err) {
    res.json({
      message: "no available direct bus-route ",
      success: false,
    });
  }
};

exports.getBusRouteList = async (req, res) => {
    try{
        const data= await busRouteDetails.findOne({
          start:req.body.start,
          destination:req.body.destination,
          deptTime:{$gte: new Date(req.body.deptTime)},
          availableSeats:{$gte:(req.body.availableSeats)},
        });

        if(data){
          res.json({
            message: "bus route available",
            success: true,
            data: data,
          });
        } else {
          res.json({
            message: "no seats available",
            success: false,
          });
        }
    } catch(err){
        res.json({
            message: "no available direct bus-route ",
            success: false,
          });
    }

};
