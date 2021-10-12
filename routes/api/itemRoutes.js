const router = require('express').Router();
const {resolve} = require('path');
const {addItem, deleteItem, getAllItems, updateItem} = require('../../controllers/item');


// Get all items
router.get('', getAllItems);

// add one item
router.post('', addItem);

// delete item by id
router.get('/:id', deleteItem);

router.patch('/:id', updateItem);

module.exports = router;