import { getExistingProducts } from "./utils/productFunction.js";

const products = getExistingProducts();

const productContainer = document.querySelector(".cart__container__items");

if (products.length === 0) {
  productContainer.innerHTML = `<p>No items in cart</p>`;
}
else {
  products.forEach(product => {
    console.log(product);
    productContainer.innerHTML += `
    <img src="" alt="${product.title}">
    <p>${product.title}</p>
    <p>${product.price}</p>
    `;
  })
}

