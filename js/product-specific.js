import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { addToCart } from "./addToCart.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
  document.location.href = "products.html";
}

const productUrl = baseUrl + "products/" + id + "?populate=*";

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();
    // console.log(details.data.attributes.image.data[0].attributes.url);

    document.title = "Pawn | Product | " + details.data.attributes.title;


    const container = document.querySelector(".product-specific");
    const crumbs = document.querySelector(".crumbs-container");

    crumbs.innerHTML = `
      <a href="products.html" class="crumbs-link"><p class="crumbs">All products</p></a>
      <span class="crumbs">/</span>
      <a href="" class="crumbs-link-active"><p class="crumbs">${details.data.attributes.title}</p></a>`;

    container.innerHTML = "";
    container.innerHTML += `
    <div class="product-image-specific" style="background-image: url(${details.data.attributes.image.data[0].attributes.url})">
    </div>
    <div class="product-information-specific">
      <div>
        <div class="product-information-specific-headings">
          <h1>${details.data.attributes.title}</h1>
          <h2><i>Some Chess Brand</i></h2>
          <p>${details.data.attributes.price},-</p>
        </div>
        <div class="product-information-specific-information">
          <p>${details.data.attributes.description}</p>
        </div>
      </div>
      <div>
        <div class="product-information-specific-button">
          <button class="add-button" data-id="${details.data.id}" data-title="${details.data.attributes.title}" data-price="${details.data.attributes.price}" data-image="${details.data.attributes.image.data[0].attributes.url}">Add to cart</button>
        </div>
      </div>
    </div>
     `;

  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-specific");
  }

  addToCart();

})();