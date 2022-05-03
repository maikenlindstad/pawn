import { clearStorage } from "../../utils/storage.js";

export default function logoutButton() {
  const button = document.querySelector("#logout");

  button.onclick = function () {
    const doLogout = confirm("Are you sure you want to log out of admin?");

    if (doLogout) {
      clearStorage();
      location.href = "../login.html";
    }
  }
}