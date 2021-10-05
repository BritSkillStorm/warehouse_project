const router = require('express').Router();
const {resolve} = require('path');

//item Form


//Get

router.get('/', (req, res) =>{
    res.sendFile(resolve('public', 'views', 'addItem.html'));
})

module.exports = router;

// POST

router.post('/', (req, res) =>{
    const item = new Item ({

    })
})



// PUT

router.put('/', (req, res) =>{

})