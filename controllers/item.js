const Item =require('../models/Item');
const mongoose = require('mongoose');

/*
const addItem = async({ itemName, amount, price, description}) =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const item = new Item({itemName, amount, price, description});
        await item.save();
        mongoose.connection.close();
        return {status: 201, message: `${itemName} successfully created!`};
    } catch (err) {
        mongoose.connection.close();
        throw{status: 500, error: `Could not create item.`};
    }
}
*/


const addItem = async(req, res) =>{

    try {
                
        await mongoose.connect(process.env.MONGO_URI);
        const item = new Item({
            itemName: req.body.itemName,
            amount : req.body.amount,
            price : req.body.price,
            description : req.body.description,
            warehouse : req.body.warehouse
        });
        const newItem = await item.save();
        mongoose.connection.close();
        res.status(200).json(newItem);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}





const deleteItem = async (itemName) =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        await Item.deleteOne({itemName});
        mongoose.connection.close();
        return;
    } catch(err) {
        mongoose.connection.close();
        throw err;
    }
}




const getAllItems = async(req, res) =>{
    try {

        console.log("testing");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        const items = await Item.find({warehouse: req.query.warehouse});
        console.log('finding items');
        if(items.length ===0) throw {status: 500, error: 'Could not find any items.'};
        mongoose.connection.close();
        res.status(200).json(items);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}


/*const getAllItems = async () =>{
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
*/

const updateItem = async (req, res)=>{
    try {

    } catch (err) {

    }
}



module.exports = {
    addItem,
    deleteItem,
    getAllItems,
    updateItem
}