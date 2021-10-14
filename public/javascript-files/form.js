

const url = '/items/form';
const addItemForm = document.querySelector('.add-item-form');
const itemTitle = document.getElementById('itemName');
const amount = document.getElementById('amount');
const price = document.getElementById('price');
const description = document.getElementById('description');
const button = document.getElementById('add-item-button');





// Create - Insert new item
// Method: POST

button.addEventListener('click',(e) =>{
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
       
        body: JSON.stringify({
            itemTitle: itemTitle.value,
            amount : amount.value,
            price : price.value,
            description : description.value
            
        })
    })
    .then(res => res.json()).then(()=>document.location.href="/warehouse");
})



