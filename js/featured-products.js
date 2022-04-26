import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "api/products";
const myPagesUrl = baseUrl + "/my-pages/" + id + "?populate=*";

(async function () {

  const container = document.querySelector(".featured-products-section");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";


    json.data.forEach(function (product) {
      container.innerHTML += `
      <a href="product-specific.html?id=${product.id}">
        <img scr="${product.attributes.image}" alt=${product.attributes.title}
        <h3>${product.attributes.title}</h3>
        <p>${product.attributes.description}</p>
      </a>`;
    });
    console.log(json.data);
  }
  catch (error) {
    console.log(error);
    displayMessage("error", error, ".featured-products-section");
  }

})();
