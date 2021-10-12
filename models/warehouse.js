const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
        warehouseType : String,
        item :[{ type: Schema.Types.ObjectId, ref: 'Item'}]
});


module.exports = mongoose.model('Warehouse', warehouseSchema);