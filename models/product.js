const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: { type: String, required: true },
  categoryName: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  sellerId: { type: String, required: true },
  storeId: { type: String, required: true },
  picture: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;