import { getExistingProducts } from "./utils/productFunction.js";
import { getExistingImage } from "./utils/productFunction.js";

const products = getExistingProducts();
const images = getExistingImage();

const productContainer = document.querySelector(".cart__container__items");
const productImageContainer = document.querySelector(".cart__container__image");

if (products.length === 0) {
  productContainer.innerHTML = `
  <p class="no-items-in-cart">No items in cart</p>
  `;
}
else {
  products.forEach(product => {
    productContainer.innerHTML += `
    <div>
    <a class="cart__container__items--link" href="">
      <p>${product.title}</p>
      <p style="text-decoration: line-through;">Remove</p>
    </a>
    <p class="cart__container__items--link">${product.price},-</p>
    </div>
      `;
  })
  images.forEach(image => {
    console.log(image);
    productImageContainer.innerHTML += `
    <a class="cart__container__image--image" href="">
      <div style="background-image: url(${image.image});">
      </div>
    </a>`;
  })
}
