import { getExistingProducts } from "./utils/productFunction.js";

export function addToCart() {
  //favButtons
  const addToCartBtn = document.querySelector(".add-button");
  addToCartBtn.addEventListener("click", handleClick);
}

function handleClick() {

  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  // const image = this.dataset.image;

  const currentProducts = getExistingProducts();

  const product = { id: id, title: title, price: price };
  // , image: image

  currentProducts.push(product)

  saveProducts(currentProducts);

}



function saveProducts(products) {
  localStorage.setItem("product", JSON.stringify(products));
}