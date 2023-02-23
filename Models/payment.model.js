const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({});

module.exports = mongoose.model("Payments", PaymentSchema);
