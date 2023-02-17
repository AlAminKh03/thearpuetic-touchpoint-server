const jwt = require("jsonwebtoken");

exports.verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("authHeader", authHeader);
  if (!authHeader) {
    return res.status(404).send("not authorized");
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(404).send("forbidden access");
    }
    req.decoded = decoded;
    console.log("decoded", req.decoded);
    next();
  });
};
