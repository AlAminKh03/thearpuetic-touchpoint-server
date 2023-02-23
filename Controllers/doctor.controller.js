const doctorModel = require("../Models/doctors.model");

exports.postDoctor = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  try {
    const doctors = await doctorModel(body);
    doctors.save();
    console.log(doctors);
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
