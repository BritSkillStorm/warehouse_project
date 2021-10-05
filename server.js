const express = require('express');
const {resolve} = require('path');
require('dotenv').config();
const routes = require('./server');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));





app.use('/itemForm', require('./routes/itemForm.js'));
app.use('/items', require('./routes/api/itemRoutes.js'));


// backend routes.

app.get('/', (req, res) =>{
    res.sendFile(resolve('public', 'views', 'index.html'));
})

app.get('#', (req, res) =>{
    res.sendFile(resolve('public', 'views', 'index.html'));
})









app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})