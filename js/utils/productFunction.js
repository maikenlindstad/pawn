export function getExistingProducts() {
  const addedProduct = localStorage.getItem("product");

  if (!addedProduct) {
    return [];
  }
  else {
    return JSON.parse(addedProduct);
  }

}

export function getExistingImage() {
  const addedProduct = localStorage.getItem("images");

  if (!addedProduct) {
    return [];
  }
  else {
    return JSON.parse(addedProduct);
  }

}
