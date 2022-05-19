import displayMessage from "./components/common/displayMessage.js";
// import createMenu from "./components/common/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import deleteButton from "./products/deleteButton.js";
// createMenu();

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

const productsUrl = baseUrl + "products/" + id + "?populate=*";
const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");
// const image = document.querySelector("displayImage");
const display = document.querySelector("#display");
const titleName = document.querySelector(".title-name")




console.log(productsUrl);


const productUrl = baseUrl + "products?populate=*";



(async function () {

  // const container = document.querySelector(".products-list");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json.data.attributes.title)

    // for (let i = 0; i < json.data.length; i++) {
    console.log(json.data.attributes.image.data[0].attributes.url);
    console.log(json.data);


    const product = json.data;

    titleName.innerHTML = `Edit form`;

    display.style.backgroundImage = `
        url(${product.attributes.image.data[0].attributes.url})`;

    title.value = json.data.attributes.title;
    price.value = json.data.attributes.price;
    description.value = json.data.attributes.description;
    idInput.value = json.data.id;
    // display = document.querySelector("#display").style.backgroundImage = `
    //   url(${json.data.attributes.image.data[0].attributes.url})`;


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
  // const imageValue = image.value;
  // const formData = new FormData();


  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  };

  updateProduct(titleValue, priceValue, descriptionValue, idValue);

}

async function updateProduct(title, price, description, id) {
  const url = baseUrl + "products/" + id;

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
      displayMessage("success", "Product successfully updated", ".message-container");

    }
  }
  catch (error) {
    console.log(error);
  }
}