


  const itemsList = document.querySelector('.items-list');
 



// base url
const url = '/items';


// empty string for output
let output =``;


// render all items
const renderItems =(items) =>{
    items.forEach( item =>{
        output += `
         <div class="item-display mt-4 col-md-6 bg-dark" id="item-display">
                 <div class="item-contents" data-id="${item._id}">
                     <h1 id="itemName" class="itemName"> ${item.itemName} </h4>
                     <h3 id="amount" class="amount"> ${item.amount} </h2>
                     <h3 id="price" class="price">  $${item.price} </h3>
                     <p id="description" class="description"> ${item.description} </p>
                    <button  class="edit-item" id="edit-item"> Edit </ button>
                    <button class="delete-item" id="delete-item"> Delete </button>
                    
                 </div>
         </div>
        `;
      });
      itemsList.innerHTML = output;
}

// Get - load all items
// Method : GET

 fetch(url)
 .then(res => res.json())
 .then(data => renderItems(data));







// DELETE - Delete items by id.

itemsList.addEventListener('click', (e) =>{
  
    let delButtonPressed = e.target.id == 'delete-item';
    let editButtonPressed = e.target.id == 'edit-item';
  
    // grabbing parent element id to delete.
     let id = e.target.parentElement.dataset.id;

    // Delete existing item
    // Method :Delete
    if(delButtonPressed) {
        fetch(`${url}/delete/${id}`, 
        {method : 'DELETE',
    })
        .then(res => res.json())
        .then(()=> location.reload());
    }

    if(editButtonPressed) {
    // when edit button is pressed, storing parent element value in parent variable.
    
    const parent = e.target.parentElement;
  
    const itemTitle = document.getElementById('itemName');
    const amount = document.getElementById('amount');
    const price = document.getElementById('price');
    const description = document.getElementById('description');
    const editButton = document.getElementById('edit-item');
    

   
    let itemNameContent = parent.querySelector('.itemName').textContent;
    let amountContent = parent.querySelector('.amount').textContent;
    let priceContent = parent.querySelector('.price').textContent;
    let descriptionContent = parent.querySelector('.description').textContent;

   


    itemTitle.value = itemNameContent;
    amount.value = amountContent;
    price.value = priceContent;
    description.value = descriptionContent;
    


   // Update - update existing item.
    // Method : PATCH
    editButton.addEventListener('click', () =>{
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                itemName: itemTitle.value,
                amount : amount.value,
                price : price.value,
                description : description.value
            })
        })
        .then(res => res.json())
        .then(()=> location.reload());
    })

    
    }
});
