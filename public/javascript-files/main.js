// grabbing item list element from warehouse.Portal
const itemsList = document.querySelector(".items-list");

// base url
const url = "/items";

// Get - load all items
// Method : GET

const getItems = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderItems(data));
};
// empty string for output
let output = ``;

// render all items through render function
const renderItems = (items) => {
  items.forEach((item) => {
    output += `
         <div class="item-display mt-4 col-md-6 bg-dark" id="item-display-${item._id}">
                 <tbody class="item-contents" data-id="${item._id}">
                      <tr>
                     <td id="itemName" class="itemName" style="color:white"> ${item.itemName} </td>
                     <td id="amount" class="amount" style="color:white"> ${item.amount} </td>
                     <td id="price" class="price"style="color:white">  $${item.price} </td>
                     <td id="description" class="description"style="color:white"> ${item.description} </td>
                    <button  class="edit-item" id="edit-item" data-id="${item._id}"> Edit </ button>
                    <button class="delete-item" id="delete-item"> Delete </button>
                    </tr>
                    
                 </tbody>
         </div>
        
        `;
  });
  itemsList.innerHTML = output;
  let editButtons = document.querySelectorAll(".edit-item");
  editButtons.forEach((button) => {
    button.addEventListener("click", editItem);
  });
};

// extra table
/*
<table class="dataTable">
<thead>
  <tr>
    <th>Numbers</th>
    <th>Names</th>
    <th>Values</th>
    <th>Dates</th>
    <th>Cash Money</th>
    <th>Messages</th>
    <th>Buttons</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="#">000000001</a></td>
    <td>Dr. Jayhawk</td>
    <td>102</td>
    <td>03/30/1940</td>
    <td>$60.42</td>
    <td>PAID</td>
    <td>
      <button class="button action">Select</button>
    </td>
  </tr>

*/

// DELETE - Delete items by id.
itemsList.addEventListener("click", (e) => {
  let delButtonPressed = e.target.id == "delete-item";

  // grabbing parent element id to delete.
  let id = e.target.parentElement.dataset.id;

  // Delete existing item
  // Method :Delete
  if (delButtonPressed) {
    fetch(`${url}/delete/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => location.reload());
  }
});

const editItem = async (e) => {
  const parent = e.target.parentElement;
  console.log(parent);
  const itemTitle = document.getElementById("itemName");
  const amount = document.getElementById("amount");
  const price = document.getElementById("price");
  const description = document.getElementById("description");

  let itemNameContent = parent.querySelector(".itemName").textContent;
  let amountContent = parent.querySelector(".amount").textContent;
  let priceContent = parent.querySelector(".price").textContent;
  let descriptionContent = parent.querySelector(".description").textContent;

  // passing current state from parent div

  itemTitle.value = itemNameContent;
  amount.value = amountContent;
  price.value = priceContent;
  description.value = descriptionContent;

  //creating card form
  const cardForm = document.createElement("form");

  //creating card title
  const cardTitleLabel = document.createElement("label");
  cardTitleLabel.textContent = "Enter Item Name";
  //creating title input
  const cardTitleInput = document.createElement("input");
  cardTitleInput.setAttribute("type", "text");
  cardTitleInput.setAttribute("id", "updateItemName");

  //creating amount title
  const cardAmount = document.createElement("label");
  cardAmount.textContent = "Enter Item Amount";

  //creating amount input
  const cardAmountInput = document.createElement("input");
  cardAmountInput.setAttribute("type", "Number");
  cardAmountInput.setAttribute("id", "updateItemAmount");

  //creating price label
  const cardPriceLabel = document.createElement("label");
  cardPriceLabel.textContent = "Enter Price";

  // creating price input
  const cardPriceInput = document.createElement("input");
  cardPriceInput.setAttribute("type", "Number");
  cardPriceInput.setAttribute("id", "updateItemPrice");

  //create description label
  const cardDescLabel = document.createElement("label");
  cardDescLabel.textContent = "Enter Description";

  // creating description input

  const cardDescInput = document.createElement("input");
  cardDescInput.setAttribute("type", "text");
  cardDescInput.setAttribute("id", "updateItemDesc");

  const submitButton = document.createElement("button");
  submitButton.textContent = "submit";

  // Update - update existing item.
  // Method : PATCH

  const sendEditRequest = () => {
    fetch(`${url}/update/${itemContentsId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        itemName: cardTitleInput.value,
        amount: cardAmountInput.value,
        price: cardPriceInput.value,
        description: cardDescInput.value,
      }),
    })
      .then((res) => res.json())
      .then(() => document.location.reload());
  };

  // submit button event listener
  submitButton.addEventListener("click", sendEditRequest);

  cardForm.append(cardTitleLabel);
  cardForm.append(cardTitleInput);
  cardForm.append(cardAmount);
  cardForm.append(cardAmountInput);
  cardForm.append(cardPriceLabel);
  cardForm.append(cardPriceInput);
  cardForm.append(cardDescLabel);
  cardForm.append(cardDescInput);
  cardForm.append(submitButton);

  const itemContentsId = e.target.getAttribute("data-id");
  document.getElementById(`item-display-${itemContentsId}`).append(cardForm);
};

// currently won't
window.onload = async () => {
  await getItems();
};
