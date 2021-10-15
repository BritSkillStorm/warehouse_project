const router = require("express").Router();
const {
  addItem,
  deleteItemById,
  getAllItems,
  updateItem,
  getItemById,
  getItemsByWarehouseId,
} = require("../../controllers/item");

// get all items directly

router.get("/", getAllItems);

// Get all items by warehouse id
router.get("/:warehouseId", getItemsByWarehouseId);

// get one item by id
router.get("/1/:itemId", getItemById);

// add one item
router.post("/form", addItem);

// delete item by id
router.delete("/delete/:id", deleteItemById);

router.patch("/update/:id", updateItem);

module.exports = router;
