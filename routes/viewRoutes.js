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

// Login
router.get("/", (req, res) =>{
    try {
    res.status(200).sendFile(resolve("public", "views", "index.html"));
    } catch(err) {
        console.error(err);
    }
})

// Product
router.get("/", (req, res) =>{
    try {
    res.status(200).sendFile(resolve("public", "views", "index.html"));
    } catch(err) {
        console.error(err);
    }
})

router.get("/", (req, res) =>{
    try {
    res.status(200).sendFile(resolve("public", "views", "index.html"));
    } catch(err) {
        console.error(err);
    }
})



module.exports = router;