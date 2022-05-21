import { getExistingProducts } from "./utils/productFunction.js";
import { getExistingImage } from "./utils/productFunction.js";

const products = getExistingProducts();
const images = getExistingImage();

const productContainer = document.querySelector(".cart__container__items");
const productImageContainer = document.querySelector(".cart__container__image");

if (products.length === 0) {
  productContainer.innerHTML = `<p>No items in cart</p>`;
}
else {
  products.forEach(product => {
    productContainer.innerHTML += `
    <div>
      <p>${product.title}</p>
      <p>${product.price}</p>
    </div>
      `;
  })
  images.forEach(image => {
    console.log(image);
    productImageContainer.innerHTML += `
    <div style="background-image: url(${image.image});">
    </div>
    `;
  })
}
