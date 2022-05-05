import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const featured = document.querySelector("#featured");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");

let isFeatured = false;

featured.onclick = () => {
  featured.setAttribute("checked", true);
  if (!featured.checked) {
    isFeatured = false;
  } else (featured.checked); {
    isFeatured = true;
  }
};

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = isFeatured;
  // const imageValue = image.files

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  };

  addProduct(titleValue, priceValue, descriptionValue, featuredValue);
}

async function addProduct(title, price, description, featured) {
  const url = baseUrl + "api/products";
  const filesAdded = new FormData();

  // filesAdded.append("files.image", image[0]);

  const data = JSON.stringify({
    data: {
      title: title,
      price: price,
      description: description,
      featured: featured,
      // image: image,
    }
  })

  const token = getToken();

  const fullToken = "Bearer " + token;

  console.log(fullToken);

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${fullToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.data.attributes.createdAt) {
      displayMessage("success", "Product successfully updated", ".message-container");
      form.reset();
    }
    location.href = "products.html";

  }

  catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  }

}