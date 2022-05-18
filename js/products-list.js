import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
createMenu();

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

const productUrl = baseUrl + "products/?populate=*";

(async function () {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    const productsContainer = document.querySelector(".product-list");
    productsContainer.innerHTML = "";

    for (let i = 0; i < json.data.length; i++) {
      const product = json.data[i].attributes;

      // console.log(json.data[i].attributes.image.data[0].attributes.url);
      console.log(product);
      console.log(product.image.data[0].attributes.url);
      productsContainer.innerHTML += `
      <img src="https://pawn-api.herokuapp.com${product.image.data[0].attributes.url}" alt=${product.title}>
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>${product.price}</p>
      `;

      //   container.innerHTML += `
      //   <a href="product-specific.html?id=${product.id}" style="display: ${displayOption}">
      // <img src="https://pawn-api.herokuapp.com${product.image.data[0].attributes.url}" alt=${product.attributes.title}>
      //     
      //     <h3>${product.attributes.title}</h3>
      //     <p>${product.attributes.description}</p>
      //     <p>${product.attributes.price},-</p>
      //   </a>`;
      // }

      // productsContainer.innerHTML += `

      // <h2>${product.data[i].attributes.title}</h2>`;

      // <img src="https://pawn-api.herokuapp.com${details.data.attributes.image.data[0].attributes.url}" alt="${details.data.attributes.title}">
      //   
      //   <p>${details.data.attributes.description}</p>`;
    }


  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-list");
  }

})();