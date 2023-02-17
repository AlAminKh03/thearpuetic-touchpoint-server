const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slots: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("appointment-options", appointmentSchema);
