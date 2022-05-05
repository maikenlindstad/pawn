import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "api/products?populate=*";

(async function () {

  const container = document.querySelector(".featured-products-section");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    const featured = true;

    // console.log(json);
    console.log(json.data[0].attributes.featured);
    // if (json.data[0].attributes.featured) {

    // }

    json.data.forEach(function (product) {
      container.innerHTML += `
        <a href="product-specific.html?id=${product.id}">
          <img src="http://localhost:1337${product.attributes.image.data[0].attributes.url}" alt=${product.attributes.title}>
          <h3>${product.attributes.title}</h3>
          <p>${product.attributes.description}</p>
          <p>${product.attributes.price},-</p>
        </a>`;
    });

    console.log(json.data);

  }
  catch (error) {
    console.log(error);
    displayMessage("error", error, ".featured-products-section");
  }

})();