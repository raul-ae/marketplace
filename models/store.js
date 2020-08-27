const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storeName: { type: String, required: true },
  storePicture: { type: String, required: true }
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;