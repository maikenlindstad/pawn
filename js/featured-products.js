import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productsUrl = baseUrl + "api/products?populate=*";

(async function () {

  const container = document.querySelector(".featured-products-section");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";




    // json.data.forEach(function (product) {

    // container.innerHTML += `
    //     <a href="product-specific.html?id=${product.id}" style="display: ">
    //       <img src="http://localhost:1337${product.attributes.image.data[0].attributes.url}" alt=${product.attributes.title}>
    //       <h3>${product.attributes.title}</h3>
    //       <p>${product.attributes.description}</p>
    //       <p>${product.attributes.price},-</p>
    //       <p>${product.attributes.featured}</p>
    //     </a>`;
    // });

    for (let i = 0; i < json.data.length; i++) {
      console.log(json.data[i].attributes.image.data[0].attributes.url);

      let displayOption = "none";

      if (json.data[i].attributes.featured) {
        displayOption = "block";
      }
      // console.log(json.data[i].attributes.featured);

      console.log(displayOption);

      const product = json.data[i];
      container.innerHTML += `
      <a href="product-specific.html?id=${product.id}" style="display: ${displayOption}">
        <img src="http://localhost:1337${product.attributes.image.data[0].attributes.url}" alt=${product.attributes.title}>
        <h3>${product.attributes.title}</h3>
        <p>${product.attributes.description}</p>
        <p>${product.attributes.price},-</p>
        <p>${product.attributes.featured}</p>
      </a>`;
    }
  }
  catch (error) {
    console.log(error);
    displayMessage("error", error, ".featured-products-section");
  }

})();