const express = require("express");
const router = express.Router();
const paymentController = require("../Controllers/payment.controller");

router.post("/create-payment-intent", paymentController.postPayment);

module.exports = router;
