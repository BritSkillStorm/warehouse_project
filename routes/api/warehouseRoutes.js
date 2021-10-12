const router = require('express').Router();
const {getAllWarehouses, addWarehouse, getWarehouseById} = require('../../controllers/warehouse');




// get warehouse by id

router.get('/:warehouseId', getWarehouseById);

// get all warehouses
router.get('', getAllWarehouses);






// add one warehouse
router.post('', addWarehouse);



module.exports = router;