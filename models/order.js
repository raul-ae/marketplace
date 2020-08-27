const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  productsId: [String],
  storeID: { type: String, required: true },
  customerID: { type: String, required: true },
  orderStatus: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  Date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;