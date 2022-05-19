import displayMessage from "./components/common/displayMessage.js";
import { getToken, saveToken, saveUser } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
// import createMenu from "./components/common/createMenu.js";
// createMenu();


const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");



form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage("warning", "Please enter login information", ".message-container");
  }

  doLogin(usernameValue, passwordValue);

}

async function doLogin(username, password) {

  const url = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      displayMessage("success", "All good. You are now logged in", ".message-container")

      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "admin/welcome.html";
    }

    if (json.error) {
      displayMessage("warning", "Invalid login details", ".message-container")
    }

    console.log(json);

  } catch (error) {
    console.log(error);
  }

}

