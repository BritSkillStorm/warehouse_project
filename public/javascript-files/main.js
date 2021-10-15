// grabbing item list element from warehouse.Portal
const itemsList = document.querySelector(".items-list");
const warehouseItemsTableBody = document.querySelector("#warehouse-table-body");

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
    const tDataRow = document.createElement("tr");

    // create cells
    const itemNameCell = document.createElement("td");
    itemNameCell.classList.add("itemName");
    const itemAmountCell = document.createElement("td");
    itemAmountCell.classList.add("amount");
    const itemPriceCell = document.createElement("td");
    itemPriceCell.classList.add("price");
    const itemDescriptionCell = document.createElement("td");
    itemDescriptionCell.classList.add("description");
    const itemButtonsCell = document.createElement("td");

    // add data to cells
    itemNameCell.innerText = item.itemName;
    itemAmountCell.innerText = item.amount;
    itemPriceCell.innerText = item.price;
    itemDescriptionCell.innerText = item.description;

    // setup edit/delete buttons
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.classList.add("edit-item");
    editButton.setAttribute("data-id", item._id);
    editButton.addEventListener("click", editItem);
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("data-id", item._id);
    deleteButton.classList.add("delete-item");
    deleteButton.addEventListener("click", deleteItem);
    itemButtonsCell.appendChild(editButton);
    itemButtonsCell.appendChild(deleteButton);

    // add cells to row
    tDataRow.appendChild(itemNameCell);
    tDataRow.appendChild(itemAmountCell);
    tDataRow.appendChild(itemPriceCell);
    tDataRow.appendChild(itemDescriptionCell);
    tDataRow.appendChild(itemButtonsCell);

    // add row to table
    warehouseItemsTableBody.appendChild(tDataRow);
  });
};

// DELETE - Delete items by id.
const deleteItem = (e) => {
  const itemId = e.target.getAttribute("data-id");

  // Delete existing item
  // Method :Delete
  fetch(`${url}/delete/${itemId}`, { method: "DELETE" }).then(() =>
    location.reload()
  );
};

const editItem = async (e) => {
  const parent = e.target.parentElement.parentElement;
  const itemContentsId = e.target.getAttribute("data-id");

  e.target.style.display = "none";
  const saveButton = document.createElement("button");
  saveButton.classList.add("save-item");
  saveButton.textContent = "Save";
  e.target.parentElement.insertBefore(saveButton, e.target);

  let itemName = parent.querySelector(".itemName");
  const itemNameInput = document.createElement("input");
  itemNameInput.value = itemName.textContent;
  itemName.textContent = "";
  itemName.appendChild(itemNameInput);

  let amount = parent.querySelector(".amount");
  const amountInput = document.createElement("input");
  amountInput.value = amount.textContent;
  amount.textContent = "";
  amount.appendChild(amountInput);

  let price = parent.querySelector(".price");
  const priceInput = document.createElement("input");
  priceInput.value = price.textContent;
  price.textContent = "";
  price.appendChild(priceInput);

  let description = parent.querySelector(".description");
  const descriptionInput = document.createElement("input");
  descriptionInput.value = description.textContent;
  description.textContent = "";
  description.appendChild(descriptionInput);

  // Update - update existing item.
  // Method : PATCH

  const sendEditRequest = () => {
    fetch(`${url}/update/${itemContentsId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        itemName: itemNameInput.value,
        amount: amountInput.value,
        price: priceInput.value,
        description: descriptionInput.value,
      }),
    })
      .then((res) => res.json())
      .then(() => document.location.reload());
  };

  // save button event listener
  saveButton.addEventListener("click", sendEditRequest);
};

// currently won't
window.onload = getItems();
