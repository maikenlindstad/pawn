import { getUserName } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {

  const { pathname } = document.location;




  const container = document.querySelector(".admin-menu");
  const main = document.querySelector(".welcome-section");


  const username = getUserName();

  container.innerHTML = `
  <div class="logged-in-as">
  <p>Logged in as ${username}</p>
  </div>
  
  <div>
    <a href="../index.html"><img src="../images/logo.png" alt="Pawn.com logo" style="width:100px"></a>
  </div>
  
  <div>
    <nav>
      <ul>
        <li><a href="welcome.html" class="${pathname === "/admin/welcome.html" ? "active" : ""}">Welcome</a></li>
        <li><a href="products.html" class="${pathname === "/admin/products.html" ? "active" : ""}">Products</a></li>
        <li><a href="order.html" class="${pathname === "/admin/order.html" ? "active" : ""}">Order</a></li>
        <li><a href="../login.html" id="logout">Logout</a></li>
      </ul>
    </nav>
  </div>`;

  main.innerHTML = `
  <h2>Welcome ${username} </h2>`;

  logoutButton();

};

// createMenu();