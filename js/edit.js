import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "api/products?populate=*";

(async function () {

  const container = document.querySelector(".products-list");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json)

    container.innerHTML = "";

    json.data.forEach(function (product) {
      container.innerHTML += `
      <a href="products/edit.html?id=${product.id}">
        <img class="preview" src="https://pawn-api.herokuapp.com${product.attributes.image.data[0].attributes.url}" alt="${product.attributes.title}"> | ${product.attributes.title} | ${product.attributes.price}
      </a>
        `;
    });

    console.log(json.data);

  }
  catch (error) {
    console.log(error);
    displayMessage("error", error, ".products-list");
  }

})();