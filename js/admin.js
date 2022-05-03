import createMenu from "./components/common/createMenu.js";
import { getToken } from "./utils/storage.js";

const token = getToken();

if (!token) {
  location.href = "../login.html"
}


createMenu();
