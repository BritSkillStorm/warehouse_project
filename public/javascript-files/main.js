


 const axios = require('axios');

const getBtn = document.getElementById('image_btn');
const postBtn = document.getElementById('');





 const getItems = () =>{
    axios.get({
        method: 'GET'
        url:'./'
    }).then(response => response.send('')).catch(err)
};


const sendData = () =>{

};


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);