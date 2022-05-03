// import { clearStorage } from "../../utils/storage.js";
import { deleteUser } from "../../utils/storage.js";
import { deleteToken } from "../../utils/storage.js";

export default function logoutButton() {
  const button = document.querySelector("#logout");

  button.onclick = function () {
    const doLogout = confirm("Are you sure you want to log out of admin?");

    if (doLogout) {

      // clearStorage();
      deleteUser();
      deleteToken();
      location.href = "../login.html";
    }


  }
}