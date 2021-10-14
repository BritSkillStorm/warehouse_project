const Warehouse =require('../models/warehouse');
const mongoose = require('mongoose');


// getting warehouses

const getAllWarehouses = async(req, res) =>{
    try {
      
        console.log("testing");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        const warehouses = await Warehouse.find();
        console.log('finding warehouses');
        if(warehouses.length ===0) throw {status: 500, error: 'Could not find any warehouses.'};
        mongoose.connection.close();
        res.status(200).json(warehouses);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}


// adding new item, returning _id console id.
const addWarehouse = async(req, res) =>{

    try {
                
        await mongoose.connect(process.env.MONGO_URI);
        const warehouse = new Warehouse({warehouseType :req.body.warehouseType});
        const newWarehouse = await warehouse.save();
        mongoose.connection.close();
        res.status(200).json(newWarehouse);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}


// get warehouse ID

const getWarehouseById = async(req, res) =>{
    try {
      
        console.log("testing");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        // searching by mongoose ID ******
        const warehouse = await Warehouse.findById(req.params.warehouseId);
        console.log('finding warehouse by id');
        if(warehouse == null) throw {status: 404, error: 'Could not find warehouse.'};
        mongoose.connection.close();
        res.status(200).json(warehouse);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}

module.exports = {
    addWarehouse,
    getAllWarehouses,
    getWarehouseById
}