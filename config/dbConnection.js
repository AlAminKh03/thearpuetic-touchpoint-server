const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

module.exports = db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongose connected");
  } catch (err) {
    console.log(err);
  }
};
