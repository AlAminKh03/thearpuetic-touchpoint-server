const appointmentModel = require("../Models/appointment.model");
const bookingModel = require("../Models/booking.model");

exports.getAppointment = async (req, res, next) => {
  const query = {};
  const options = await appointmentModel.find(query);
  const date = req.query.date;

  const appointMentQuery = { AppointmentDate: date };

  const alreadyBooked = await bookingModel.find(appointMentQuery);

  options.forEach((option) => {
    const optionBooked = alreadyBooked.filter(
      (booked) => booked.ServiceFor === option.name
    );
    const bookedSlots = optionBooked.map((booked) => booked.AppointmentTime);
    const availableSlots = option.slots.filter(
      (availableSlot) => !bookedSlots.includes(availableSlot)
    );
    option.slots = availableSlots;
  });

  res.status(200).send(options);
};

exports.postAppointment = async (req, res, next) => {
  const appointment = req.body;
  const appointments = await appointmentModel(appointment);
  try {
    appointments.save();
    res.status(201).send(appointments);
  } catch (err) {
    console.log(err);
  }
};
exports.getAppointmentsName = async (req, res, next) => {
  const query = {};
  try {
    const appointmentsName = await appointmentModel
      .find(query)
      .select("name")
      .exec();
    res.status(201).send(appointmentsName);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
