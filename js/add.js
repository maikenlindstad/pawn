import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  };

  addProduct(titleValue, priceValue, descriptionValue);
}

async function addProduct(title, price, description) {
  const url = baseUrl + "api/products";

  const data = JSON.stringify({
    data: {
      title: title,
      price: price,
      description: description
    }
  })

  const token = getToken();

  const fullToken = "Bearer " + token;

  console.log(fullToken);

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${fullToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.data.attributes.createdAt) {
      displayMessage("success", "Product successfully updated", ".message-container");
      form.reset();
    }
    location.href = "products.html";

  }
  catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");

  }

}
