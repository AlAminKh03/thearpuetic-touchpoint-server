const { ObjectId, WriteError } = require("mongodb");
const mongoose = require("mongoose");
const userModel = require("../Models/user.model");
const { generateToken } = require("../utils/generateToken");

exports.getUser = async (req, res, next) => {
  try {
    const query = {};
    const users = await userModel.find(query);
    res.status(201).send(users);
  } catch (err) {
    res.status(404).send({ message: err });
  }
};
exports.postUser = async (req, res, next) => {
  const user = req.body;

  try {
    const registerUser = await userModel(user);
    await registerUser.save();
    res.status(200).send(registerUser);
  } catch (err) {
    console.log(err);
  }
};

exports.getJWT = async (req, res, next) => {
  const email = req.query.email;
  const query = { email: email };
  try {
    const user = await userModel.find(query);
    if (user) {
      const token = generateToken(email);
      return res.send({ accessToken: token });
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ accessToken: "" });
  }
};

exports.getAdmin = async (req, res, next) => {
  const email = req.params.email;
  const filter = { email: email };
  console.log("filter", filter);
  try {
    const user = await userModel.findOne(filter);
    console.log("user", user);
    res.send({ isAdmin: user?.role === "admin" });
  } catch (err) {
    console.log(err);
    res.send({ "error message": err });
  }
};

exports.updatingRole = async (req, res, next) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updatedDoc = { role: "admin" };
  const decodedEmail = req.decoded.email;
  console.log(decodedEmail);

  try {
    const user = await userModel.findOne({ email: decodedEmail });
    console.log(user);
    console.log(user.role);
    if (user?.role !== "admin") {
      return res.status(404).send({ message: "Unauthorized Access" });
    }
    const updatedRole = await userModel.findOneAndUpdate(filter, updatedDoc);
    res.status(200).send(updatedRole);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
