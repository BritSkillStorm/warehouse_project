const router = require('express').Router();
const {resolve} = require('path');
const {addItem, deleteItem, getAllItems} = require('../../controllers/item');


// Get all items
router.get('/', async (req, res) =>{
    try {
        const items = await getAllItems();
        res.status(200).json(items);

    } catch(err) {
        res.status(500).json(err);
    }
})


// Get one item

router.get('/:name', (req, res) => {
    console.log(req.params.name);
    res.sendFile(resolve('public', 'views', 'warehousePortal.html'));
})


// Post item
router.post('/', async (req, res) =>{
    try {    
        const data = await addItem(req.body);
        console.log(data);
        res.sendFile(resolve('public', 'views', 'warehousePortal.html'));
    } catch(err) {
    res.status(500).json(err);
    }
});


//Delete one Item
router.delete('/:name', async (req, res) =>{
    try {
        await deleteItem(req.params.name);
        res.status(200).json({message: `${req.params.name} delete!`});

    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router;