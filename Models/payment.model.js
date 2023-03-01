const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  bookingId: String,
  price: Number,
  transitionId: String,
  email: String,
});

module.exports = mongoose.model("Payments", PaymentSchema);
