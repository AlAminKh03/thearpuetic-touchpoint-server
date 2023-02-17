const express = require("express");
const router = express.Router();
const doctorController = require("../Controllers/doctor.controller");

router.get("/doctors", doctorController.getDoctor);
router.get("/doctors", doctorController.getDoctor);

module.exports = router;
