const router = require("express").Router();

router.get("/", (req, res) =>{
    try {
        res.status(200).json({data: "some data"})
    } catch(err) {

    }
})



module.exports = router;