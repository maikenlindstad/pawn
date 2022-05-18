import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
// import createMenu from "./components/common/createMenu.js";
// createMenu();

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

const productUrl = baseUrl + "products/?populate=*";

(async function () {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    const productsContainer = document.querySelector(".products-section");
    productsContainer.innerHTML = "";

    for (let i = 0; i < json.data.length; i++) {
      const product = json.data[i].attributes;

      // console.log(json.data[i].attributes.image.data[0].attributes.url);
      console.log(product);
      console.log(product.image.data[0].attributes.url);
      productsContainer.innerHTML += `
      <a href="product-specific.html?id=${product.id}" class="product-card">
        <div class="product-image" style="background-size: cover; background-repeat: no-repeat;height: 380px; width: 220px; background-image: url(https://pawn-api.herokuapp.com${product.image.data[0].attributes.url})">
        </div>
        <div class="product-information">
          <h3>${product.title}</h3>
          <p>${product.price},-</p>
        </div>
        <div class="product-button-div">
          <p class="product-button">View</p>
        </div>
      </a>
      `;

    }


  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-list");
  }

})();