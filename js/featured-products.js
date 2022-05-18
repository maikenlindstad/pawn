import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
// import createMenu from "./components/common/createMenu.js";
// createMenu();

const productsUrl = baseUrl + "products?populate=*";

(async function () {

  const container = document.querySelector(".featured-products-section");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    container.innerHTML = "";

    for (let i = 0; i < json.data.length; i++) {
      console.log(json.data[i].attributes.image.data[0].attributes.url);
      console.log(json.data[i]);
      let displayOption = "none";

      if (json.data[i].attributes.featured) {
        displayOption = "block";
      }

      const product = json.data[i];
      container.innerHTML += `
      <a href="product-specific.html?id=${product.id}" style="display: ${displayOption}" class="product-card">
        <div class="product-image" style="background-size: cover; background-repeat: no-repeat;height: 380px; width: 220px; background-image: url(https://pawn-api.herokuapp.com${product.attributes.image.data[0].attributes.url})">
        </div>
        <div class="product-information">
          <h3>${product.attributes.title}</h3>
          <p>${product.attributes.price},-</p>
        </div>
        <div class="product-button-div">
          <p class="product-button">View</p>
        </div>
      </a>`;
    }
  }

  catch (error) {

    console.log(error);

    displayMessage("error", error, ".featured-products-section");

  }

})();