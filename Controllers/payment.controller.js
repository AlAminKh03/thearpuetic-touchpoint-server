const paymentModel = require("../Models/payment.model");
const bookingModel = require("../Models/booking.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.postPayment = async (req, res, next) => {
  const booking = req.body;
  const price = booking.price;
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
exports.postPaymentInfo = async (req, res, next) => {
  const body = req.body;
  const result = await paymentModel(body);
  result.save();
  const id = body.bookingId;
  const filter = { _id: id };
  const updatedinfo = { paid: true };
  const updatedPaymentInfo = await bookingModel.findOneAndUpdate(
    filter,
    updatedinfo
  );
  res.status(201).send(result);
};
