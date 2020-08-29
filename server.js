const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const { resolve } = require("path");

// Stripe library
const stripe = require("stripe")("sk_test_51HLY6nIsyYjySygOJGmCWX231cMig2jVrEr4IQXgkYOEYR4Bvz5ebA1NIzMrDh4IeO70KXZMyxKu5XqKe1UFCPdy00OxBsv0Jq");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Stripe
const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

// A PaymentIntent tracks the customer's payment lifecycle, keeping track of any failed payment attempts and ensuring the customer is only charged once. Return the PaymentIntent's client secret in the response to finish the payment on the client.
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
