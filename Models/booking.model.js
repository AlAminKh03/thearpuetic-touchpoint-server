const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  ServiceFor: {
    type: String,
    required: true,
  },
  AppointmentDate: {
    type: String,
    required: true,
  },
  AppointmentTime: {
    type: String,
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
