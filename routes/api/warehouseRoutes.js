const router = require('express').Router();
const {getAllWarehouses, addWarehouse, getWarehouseById} = require('../../controllers/warehouse');


router.get('/:warehouseId', getWarehouseById);

// get all warehouses
router.get('', getAllWarehouses);

// get warehouse by id




// get one warehouse
router.post('', addWarehouse);



module.exports = router;