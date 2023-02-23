const express = require("express");
const router = express.Router();
const doctorController = require("../Controllers/doctor.controller");
const { verifyJwt } = require("../middleware/Verifyjwt");

router.get("/doctors", doctorController.getDoctor);
router.post("/doctors", verifyJwt, doctorController.postDoctor);

module.exports = router;
