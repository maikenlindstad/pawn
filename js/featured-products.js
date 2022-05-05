import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "api/products?populate=*";

(async function () {

  const container = document.querySelector(".featured-products-section");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    container.innerHTML = "";

    for (let i = 0; i < json.data.length; i++) {
      console.log(json.data[i].attributes.image.data[0].attributes.url);
      let displayOption = "none";

      if (json.data[i].attributes.featured) {
        displayOption = "block";
      }

      const product = json.data[i];
      container.innerHTML += `
      <a href="product-specific.html?id=${product.id}" style="display: ${displayOption}">
        <img src="https://pawn-api.herokuapp.com${product.attributes.image.data[0].attributes.url}" alt=${product.attributes.title}>
        <h3>${product.attributes.title}</h3>
        <p>${product.attributes.description}</p>
        <p>${product.attributes.price},-</p>
      </a>`;
    }
  }

  catch (error) {

    console.log(error);

    displayMessage("error", error, ".featured-products-section");

  }

})();