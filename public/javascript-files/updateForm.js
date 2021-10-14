window.onload = function () {
  let url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (let i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }
  document.getElementById("itemName").innerHTML = data.itemName;
};

// Update - update existing item.
// Method : PATCH
editButton.addEventListener("click", () => {
  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      itemName: itemTitle.value,
      amount: amount.value,
      price: price.value,
      description: description.value,
    }),
  })
    .then((res) => res.json())
    .then(() => (document.location.href = "/warehouse"));
});
