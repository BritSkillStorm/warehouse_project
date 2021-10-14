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
                 <div class="item-contents" data-id="${item._id}">
                     <h1 id="itemName" class="itemName"> ${item.itemName} </h4>
                     <h3 id="amount" class="amount"> ${item.amount} </h2>
                     <h3 id="price" class="price">  $${item.price} </h3>
                     <p id="description" class="description"> ${item.description} </p>
                    <button  class="edit-item" id="edit-item" data-id="${item._id}"> Edit </ button>
                    <button class="delete-item" id="delete-item"> Delete </button>
                    
                 </div>
         </div>
        `;
  });
  itemsList.innerHTML = output;
  let editButtons = document.querySelectorAll(".edit-item");
  editButtons.forEach((button) => {
    button.addEventListener("click", editItem);
  });
};

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

  itemTitle.value = itemNameContent;
  amount.value = amountContent;
  price.value = priceContent;
  description.value = descriptionContent;

  const cardForm = document.createElement("form");
  const cardLabel = document.createElement("label");

  cardLabel.textContent = "Enter Item Name";

  const cardInput = document.createElement("input");
  cardInput.setAttribute("type", "text");
  cardInput.setAttribute("id", "updateItemName");
  const submitButton = document.createElement("button");
  submitButton.textContent = "submit";

  // Update - update existing item.
  // Method : PATCH
  // PATCH METHOD

  const sendEditRequest = () => {
    fetch(`${url}/update/${itemContentsId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        itemName: cardInput.value,
      }),
    })
      .then((res) => res.json())
      .then(() => document.location.reload());
  };

  // submit button event listener
  submitButton.addEventListener("click", sendEditRequest);

  cardForm.append(cardLabel);
  cardForm.append(cardInput);
  cardForm.append(submitButton);

  const itemContentsId = e.target.getAttribute("data-id");
  document.getElementById(`item-display-${itemContentsId}`).append(cardForm);
};

window.onload = async () => {
  await getItems();
};
//const updateUrl = `/${url}/updateForm?${body}=`+ encodeURIComponent(itemTitle);
//document.location.href="/updateForm"
