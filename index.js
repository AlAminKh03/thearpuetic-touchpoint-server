const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.port || 8000;
const db = require("./config/dbConnection");
const appointmentRoutes = require("./Routes/appointment.routes");
const bookingRoutes = require("./Routes/booking.routes");
const userRoutes = require("./Routes/user.routes");
const doctorRoutes = require("./Routes/doctors.routes");
const paymentRoutes = require("./Routes/payment.routes");

const app = express();
app.use(cors());
app.use(express.json());

db();

app.use(appointmentRoutes);
app.use(bookingRoutes);
app.use(userRoutes);
app.use(doctorRoutes);
app.use(paymentRoutes);

app.listen(PORT, () => {
  console.log("connected");
});
