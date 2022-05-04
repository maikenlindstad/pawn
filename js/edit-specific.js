import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getToken } from "./utils/storage.js";
import deleteButton from "./products/deleteButton.js";



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
  document.location.href = "products.html";
}

const token = getToken();

if (!token) {
  location.href = "../../login.html"
}


const productsUrl = baseUrl + "api/products/" + id + "?populate=*";

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

// const productsUrl = baseUrl + "api/products?populate=*";

(async function () {

  // const container = document.querySelector(".products-list");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json.data.attributes.title)

    title.value = json.data.attributes.title;
    price.value = json.data.attributes.price;
    description.value = json.data.attributes.description;
    idInput.value = json.data.id;

    deleteButton(json.data.id);

  }
  catch (error) {
    console.log(error);
    // displayMessage("error", error, ".products-list");
  }
  finally {
    loading.style.display = "none";
    form.style.display = "block";
  }

})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const idValue = idInput.value;

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  };

  updateProduct(titleValue, priceValue, descriptionValue, idValue);

}

async function updateProduct(title, price, description, id) {
  const url = baseUrl + "api/products/" + id;

  const data = JSON.stringify({
    data: {
      title: title,
      price: price,
      description: description
    }
  })


  const fullToken = "Bearer " + token;

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${fullToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.data.attributes.updatedAt) {
      displayMessage("success", "Product successfully created", ".message-container");

    }
  }
  catch (error) {
    console.log(error);
  }
}