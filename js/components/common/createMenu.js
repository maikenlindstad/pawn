import { getUserName } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {

  const { pathname } = document.location;
  console.log(pathname);

  const username = getUserName();


  const container = document.querySelector(".admin-menu");
  const main = document.querySelector(".welcome-section");
  const publicMenu = document.querySelector(".menu-container-public");


  let authLink = `<a href="login.html" class="${pathname === '/login.html' ? 'active' : '' || pathname === '/admin/products.html' ? 'active' : ''}">Business</a>`;

  if (username) {
    authLink = `<a href="admin/welcome.html">Back to admin</a>`;
  }

  publicMenu.innerHTML = `
  ${authLink}
  <a href="index.html" class="${pathname === '/index.html' ? 'active' : '' || pathname === '/products.html' ? 'active' : '' || pathname === '/product-specific.html' ? 'active' : '' || pathname === '/cart.html' ? 'active' : ''}">Private</a>
  `;




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
        <li><a href="" id="logout">Logout</a></li>
      </ul>
    </nav>
  </div>`;

  // main.innerHTML += `
  // <h2>Welcome ${username} </h2>`;

  logoutButton();

};

createMenu();