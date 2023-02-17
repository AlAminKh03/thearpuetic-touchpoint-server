const BookingModel = require("../Models/booking.model");
const { verifyJwt } = require("../middleware/Verifyjwt");


exports.postBooking = async (req, res, next) => {
  const body = req.body;
  const query = {
    AppointmentDate: body.AppointmentDate,
    email: body.email,
    ServiceFor: body.ServiceFor,
  };

  try {
    const alreadyBooked = await BookingModel.find(query);
    if (alreadyBooked.length) {
      const message = `You have already an appointment on ${body.AppointmentDate}`;
      return res.send({ message });
    }
    const booking = await BookingModel(body);
    await booking.save();
    res.status(201).send(booking);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message);
  }
};

exports.getBookings = async (req, res, next) => {
  const email = req.query.email;
  const query = { email: email };
  const decodedEmail = req.decoded.email;
  console.log(decodedEmail);
  try {
    if (email !== decodedEmail) {
      return res.status(404).send({ message: "forbidden access" });
    }
    const booking = await BookingModel.find(query);
    res.status(201).send(booking);
  } catch (err) {
    res.staus(404).send(err);
  }
};
