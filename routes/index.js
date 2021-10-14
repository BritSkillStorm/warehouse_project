const router = require("express").Router();
const {resolve} = require("path");

// Home page
router.get("/", (req, res) =>{
    try {
    res.status(200).sendFile(resolve("public", "views", "index.html"));
    } catch(err) {
        console.error(err);
    }
})

//  Warehouse
router.get("/warehouse", (req, res) =>{
    try {
    res.status(200).sendFile(resolve("public", "views", "warehousePortal.html"));
    } catch(err) {
        console.error(err);
    }
})

//  Add Item form
router.get("/form", (req, res) =>{
    try {
    res.status(200).sendFile(resolve("public", "views", "addItem.html"));
    } catch(err) {
        console.error(err);
    }
})

// update Item Form
router.get("/updateForm", (req, res) =>{
    try {
    res.status(200).sendFile(resolve("public", "views", "updateItem.html"));
    } catch(err) {
        console.error(err);
    }
})



module.exports = router;