const express = require('express');
const {resolve} = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));



app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})