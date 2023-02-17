const express = require("express");
const bookingAppointment = require("../Controllers/booking.controllers");
const { verifyJwt } = require("../middleware/Verifyjwt");
const router = express.Router();

// router.get("/appointments", appointmentController.getAppointment);
router.post("/booking", bookingAppointment.postBooking);
router.get("/booking", verifyJwt, bookingAppointment.getBookings);

module.exports = router;
