import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
  document.location.href = "products.html";
}

const productUrl = baseUrl + "api/products/" + id + "?populate=*";

// // + "?populate=*"


(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = "Pawn | Product | " + details.data.attributes.title

    console.log(details.data);


    const container = document.querySelector(".product-specific");
    container.innerHTML = "";

    container.innerHTML += `
    <img src="https://pawn-api.herokuapp.com${details.data.attributes.image.data[0].attributes.url}" alt="${details.data.attributes.title}">
      <h2>${details.data.attributes.title}</h2>
      <p>${details.data.attributes.description}</p>`;



  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-specific");
  }

})();