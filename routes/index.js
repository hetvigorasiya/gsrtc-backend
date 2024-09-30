var express = require('express');
var router = express.Router();
const BusRouteController = require("../controller/busRoute")
const TicketController = require("../controller/TicketBooking")


/* GET home page. */
router.post('/addBusRoute', BusRouteController.addBusRoute);

router.get('/getBusRouteList', BusRouteController.getBusRouteList);

router.post('/BookTicket', TicketController.ticketBooking);

router.post('/getbooking/:userEmail', TicketController.getBooking);


module.exports = router;
