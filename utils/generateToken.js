const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateToken = (email) => {
  console.log(process.env.JWT_TOKEN_SECRET);
  const token = jwt.sign({ email }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "30d",
  });
  return token;
};
