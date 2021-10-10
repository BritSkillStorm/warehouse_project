


 const axios = require('axios');

const getBtn = document.getElementById('image_btn');
const postBtn = document.getElementById('');





 const getData = () =>{
     axios.get(
         'https://reqres.in/api/users'
     ).then(res =>{
         console.log(res)
 });
};


const sendData = () =>{

};


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);