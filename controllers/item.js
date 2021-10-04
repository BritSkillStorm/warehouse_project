const Item =require('../models/Item');
const mongoose = require('mongoose');


const addItem = async({id, name, amount, description}) =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const item = new Item({id, name, amount, description});
        await item.save();
        mongoose.connection.close();
        return {status: 201, message: `${name} successfully created!`};
    } catch (err) {
        mongoose.connection.close();
        throw{status: 500, error: `Could not create item.`};
    }
}


const deleteItem = async (name) =>{
    try{
        await mongoose.connection(process.env.MONGO_URI);
        await Item.deleteOne({name});
        mongoose.connection.close();
        return;
    } catch(err) {
        mongoose.connection.close();
        throw err;
    }
}


const getAllItems = async () =>{
    try {
        await mongoose.connection(process.env.MONGO_URI);
        const items = await Item.find();
        if(items.length ===0) throw {status: 500, error: 'Could not find any items.'};
        mongoose.connection.close();
        return items;
    } catch (err) {
        mongoose.connection.close();
        throw err;
    }
}

module.exports = {
    addItem,
    deleteItem,
    getAllItems
}