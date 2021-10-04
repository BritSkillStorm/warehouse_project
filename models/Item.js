const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: Number,
    name: String,
    amount: Number,
    description: String

});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;