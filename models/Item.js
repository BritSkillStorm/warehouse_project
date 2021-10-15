const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  amount: Number,
  price: Number,
  description: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
