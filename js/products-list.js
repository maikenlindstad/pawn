import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";

const productUrl = baseUrl + "products?populate=*";

const productsContainer = document.querySelector(".products-section");
const search = document.querySelector(".search");

async function renderProducts() {
  try {
    const response = await fetch(productUrl);
    const results = await response.json();
    productsContainer.innerHTML = "";

    for (let i = 0; i < results.data.length; i++) {
      console.log(results.data[i].attributes.image.data[0].attributes.url);
      console.log(results.data[i]);

      const product = results.data[i];
      productsContainer.innerHTML += `
      <a href="product-specific.html?id=${product.id}" class="product-card">
        <div class="product-image" style="background-size: cover; background-repeat: no-repeat; width: 220px; background-image: url(${product.attributes.image.data[0].attributes.url})">
        </div>
        <div class="product-information">
          <h3>${product.attributes.title}</h3>
          <p>${product.attributes.price},-</p>
        </div>
      </a>`;
    }

    // const productsToRender = results.data;

    // productsToRender.forEach(function (product) {

    //   productsContainer.innerHTML += `
    //   <a href="product-specific.html?id=${product.id}" class="product-card">
    //           <div class="product-image" style="background-size: cover; background-repeat: no-repeat;height: 380px; width: 220px; background-image: url(${product.attributes.image.data[0].attributes.url})">
    //           </div>
    //           <div class="product-information">
    //             <h3>${product.attributes.title}</h3>
    //             <p>${product.attributes.price},-</p>
    //           </div>
    //           <div class="product-button-div">
    //           </div>
    //         </a>`;

    // });

    // function searchProducts(products) {

    //   search.onkeyup = () => {

    //     const searchValue = event.target.value.trim().toLowerCase();

    //     const filteredProducts = products.data.filter(function (product) {

    //       if (product.attributes.title.toLowerCase().startsWith(searchValue)) {
    //         return true;
    //       }

    //     });

    //     console.log(filteredProducts);

    //     filteredProducts.forEach(product => {

    //       console.log(product.attributes.title);

    //       productsContainer.innerHTML = "";


    //   productsContainer.innerHTML += `
    //   <a href="product-specific.html?id=${product.id}" class="product-card">
    //   <div class="product-image" style="background-size: cover; background-repeat: no-repeat;height: 380px; width: 220px; background-image: url(${product.attributes.image.data[0].attributes.url})">
    //   </div>
    //   <div class="product-information">
    //     <h3>${product.attributes.title}</h3>
    //     <p>${product.attributes.price},-</p>
    //   </div>
    //   <div class="product-button-div">
    //     <p class="product-button">View</p>
    //     <p class="product-button">Add</p>
    //   </div>
    // </a>`;

    //         });

    //         renderProducts(filteredProducts);

    //       };

    //     }
    //     renderProducts(results);

    //     searchProducts(results);


  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".products-section");

  }
}
renderProducts();