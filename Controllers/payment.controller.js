const paymentModel = require("../Models/payment.model");
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
