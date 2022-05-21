export function getExistingProducts() {
  // addedProduct = favs
  const addedProduct = localStorage.getItem("product");

  if (!addedProduct) {
    return [];
  }
  else {
    return JSON.parse(addedProduct);
  }

}