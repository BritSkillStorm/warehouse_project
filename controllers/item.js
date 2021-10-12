const Item =require('../models/Item');
const mongoose = require('mongoose');




// get all items from item table

const getAllItems = async(req, res) =>{
    try {

        console.log("inside get all items");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        const items = await Item.find();
        console.log(items);
        if(items.length ===0) throw {status: 500, error: 'Could not find any items.'};
        mongoose.connection.close();
        res.status(200).json(items);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}


// add item
const addItem = async(req, res) =>{

    try {
                
        await mongoose.connect(process.env.MONGO_URI);
        const item = new Item({
            itemName: req.body.itemName,
            amount : req.body.amount,
            price : req.body.price,
            description : req.body.description,
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


// get item by id

const getItemById = async(req, res) =>{
    try {
      
        console.log("inside get item by id");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        // searching by mongoose ID ******
        const item = await Item.findById(req.params.itemId);
        console.log('finding warehouse by id');
        if(item == null) throw {status: 404, error: 'Could not find item.'};
        mongoose.connection.close();
        res.status(200).json(item);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}




const deleteItemById = async(req, res) =>{
    try {
      
        console.log("testing delete Item by Id");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        // searching by mongoose ID ******
        console.log('finding item by id to delete');
      
        const itemId = req.params.id;
        const deleteItem =await Item.findByIdAndRemove(itemId);
            if(!err) {
                console.log(deleteItem); 
            }
        mongoose.connection.close();
        res.status(200);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }

}


// grabbing items by querying warehouse id
const getItemsByWarehouseId = async(req, res) =>{
    try {

        console.log("inside get items by warehouse id");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        const items = await Item.findOne({warehouse: req.params.warehouseId});
        console.log(items);
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

// update item by id
const updateItem = async (req, res)=>{
    try {


        console.log("testing update Item");
        await mongoose.connect(process.env.MONGO_URI);
        console.log('inside mongo');
        // searching by mongoose ID ******
        console.log('update item');
      
        const itemId = req.params.id;
        const updateItem =await Item.findByIdAndUpdate(itemId);
            if(!err) {
                console.log(updateItem); 
            }
        mongoose.connection.close();
        res.status(200);

    } catch(err) {
        console.log(err);
        mongoose.connection.close();
        res.status(500).json(err);
    }
}



module.exports = {
    addItem,
    deleteItemById,
    getAllItems,
    updateItem,
    getItemById,
    getItemsByWarehouseId
}