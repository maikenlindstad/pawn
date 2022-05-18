import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "products?populate=*";

(async function () {

  const container = document.querySelector(".main__admin__div__page__products-list");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    console.log(json)

    container.innerHTML = "";

    json.data.forEach(function (product) {
      container.innerHTML += `
        <a href="products/edit.html?id=${product.id}" class="main__admin__div__page__products-list__a">
          <div class="main__admin__div__page__product-list__a__div">
            <img class="preview" src="https://pawn-api.herokuapp.com${product.attributes.image.data[0].attributes.url}" alt="${product.attributes.title}">
            <p>Title: ${product.attributes.title}</p>
            <p>Price: ${product.attributes.price} kr</p>
          </div>
        </a>`;
    });

    console.log(json.data);

  }
  catch (error) {
    console.log(error);
    displayMessage("error", error, ".main__admin__div__page__products-list");
  }

})();