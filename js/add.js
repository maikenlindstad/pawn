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

const url = baseUrl + "products";


(function imageDisplay() {
  var uploadedImage = "";
  // Codefoxx
  image.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploadedImage = reader.result;
      document.querySelector("#display").style.backgroundImage = `
      url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
    document.querySelector(".displayPlaceholder").style.display = `
    none`;
  })
})();


// Comment: Proud to say I just understood what needed to be done here. 
// No Google for this bit
// And it worked right away :D

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);

function reset() {
  document.querySelector("#display").style.backgroundImage = `none`;
  document.querySelector(".warning").style.display = `none`;
}

////////////////////////////////////////////////////////////////////////


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

async function submitForm(event) {

  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = isFeatured;
  const formData = new FormData();

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  };

  if (image.files.length === 0) {
    return alert("Select an image");
  }

  const file = image.files[0];

  const data = { title: titleValue, price: priceValue, description: descriptionValue, featured: featuredValue };
  formData.append("files.image", file, file.name);
  formData.append("data", JSON.stringify(data));

  const token = getToken();

  const fullToken = "Bearer " + token;

  console.log(fullToken);

  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `${fullToken}`,
    }
  };

  try {
    const response = await fetch(url, options);
    console.log(response);
    location.href = "products.html";

  }

  catch (error) {
    console.log(error);
    // I do not get this error to show
    displayMessage("error", "An error occured", ".message-container");

  }

}