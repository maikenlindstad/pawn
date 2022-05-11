// Display preview
// codefoxx
// JavaScript - How to Upload and Display Images
const image = document.querySelector("#image");
var uploadedImage = "";

image.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
    document.querySelector("#display").style.backgroundImage = `url("${uploadedImage}")`;
  });
  reader.readAsDataURL(this.files[0]);
})


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
// const image = document.querySelector("#image");
const message = document.querySelector(".message-container");

<<<<<<< HEAD
const url = baseUrl + "api/products";

=======
>>>>>>> 3d5b35b9c3277ff3e6fc91041384b659e3ec2a2e

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
<<<<<<< HEAD
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
=======
  const imageValue = image.files;
  
  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue === 0) {
    displayMessage("warning", "Please supply proper values", ".message-container");
  };

  addProduct(titleValue, priceValue, descriptionValue, featuredValue, imageValue);
}



async function addProduct(title, price, description, featured, image) {
  const url = baseUrl + "api/product";

  const data = JSON.stringify({
    data: {
      title: title,
      price: price,
      description: description,
      featured: featured,
      image: image
    }
  })
>>>>>>> 3d5b35b9c3277ff3e6fc91041384b659e3ec2a2e

  console.log(image);

  const token = getToken();

  const fullToken = "Bearer " + token;


  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `${fullToken}`,
    }
  };

  try {
    const response = await fetch(url, options);
<<<<<<< HEAD
    console.log(response);
=======
    const json = await response.json();
    console.log(json);

    if (json.data.attributes.createdAt) {
      displayMessage("success", "Product successfully updated", ".message-container");
      form.reset();
    }

    // if (json.error){
    // displayMessage("error", json.error.message, ".message-container");
    // }
    // Making this error only gets: TypeError: Cannot read properties of null (reading 'attributes')
    // at addProduct (add.js:85:19)
>>>>>>> 3d5b35b9c3277ff3e6fc91041384b659e3ec2a2e
    location.href = "products.html";
  }

  catch (error) {
    console.log(error);
    // I do not get this error to show
    displayMessage("error", "An error occured", ".message-container");

  }

}


// Oliver code 
// async function onCreateExampleWithMedia(event) {
//   event.preventDefault();
//   const form = event.target;
//   const action = form.action;
//   const method = form.method;
//   const enctype = form.method;
//   const originalFormData = new FormData(form);
//   const body = new FormData();

// // console.log(body);

//   for (const [key, value] of originalFormData.entries()) {
//     if (key.includes('files.')){
//       body.append(key, value);
//       originalFormData.delete(key);
//     }
//   }

// const data = Object.fromEntries(originalFormData.entries());
// body.append("data", JSON.stringify(data));

// const response = await fetch(action, { body, method, enctype })
// const results = await response.json();

// window.location = action;

// }


// const createForm = document.querySelector("form#create");

// if (createForm) {
//   createForm.addEventListener("submit", onCreateExampleWithMedia)
// }