const express = require("express");
const appointmentController = require("../Controllers/appointment.controller");
const router = express.Router();

router.get("/appointments", appointmentController.getAppointment);
router.post("/appointments", appointmentController.postAppointment);
router.get("/appointmentsName", appointmentController.getAppointmentsName);

module.exports = router;
