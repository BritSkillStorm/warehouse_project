
const express = require('express');
require('dotenv').config();



// intializing express
const app = express();
// creating port
const PORT = process.env.PORT || 8080;
// encoding json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//setting static folder to public
app.use(express.static('public'));





// routing to route folder for calls.
app.use('/', require('./routes/index'));



app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})