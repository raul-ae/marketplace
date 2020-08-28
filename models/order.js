const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product"
    }
  ],
  storeID: { 
    type: Schema.Types.ObjectId, 
    ref: "store" 
  },
  customerID: { 
    type: Schema.Types.ObjectId, 
    ref: "consumer" 
  },
  orderStatus: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  Date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;