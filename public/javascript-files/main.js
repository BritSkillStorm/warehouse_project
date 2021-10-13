

alert('hey');

const itemsList = document.querySelector('.items-list');


const url = 'http://localhost:8085/items';

let output =``;


const renderItems =(items) =>{
    items.forEach( item =>{
        output += `
         <div class="item-display mt-4 col-md-6 bg-dark">
             <div class="item-body">
                 <div class="stuff">
                     <h1 class="itemName"> ${item.itemName} </h4>
                     <h3 class="amount"> ${item.amount} </h2>
                     <h3 class="price"> ${item.price} </h3>
                     <p class="description"> ${item.description} </p>
                     <a href="#" class= "item-link">Edit</a>
                     <a href="#" class="item-link">Delete</a>
                 </div>
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

    //return items;



/*
document.addEventListener("DOMContentLoaded", async () =>{
    let items =[];
    try {
     items = await getAllItems();
    } catch(err){
        console.log("Error!");
        console.log(error);
    }

    console.log(items);
})*/