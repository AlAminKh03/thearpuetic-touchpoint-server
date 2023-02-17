const doctorModel = require("../Models/doctors.model");

exports.postDoctor = async (req, res, next) => {
  const body = req.body;
  try {
    const doctors = await doctorModel(body);
    await doctors.save();
    res.status(201).send(doctors);
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getDoctor = async (req, res, next) => {
  const query = {};
  try {
    const doctor = await doctorModel.find(query);
    res.status(201).send(doctor);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
