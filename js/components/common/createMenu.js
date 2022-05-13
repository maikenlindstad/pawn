import { getUserName } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;
  // console.log(pathname);
  const username = getUserName();
  const container = document.querySelector(".header__admin");
  const publicMenu = document.querySelector(".menu-container-public");


  if (pathname === "/admin/products/edit.html") {

    container.innerHTML = `
      <div class="header__admin__menu">
        <div class="header__admin__menu__div">
          <p>Logged in as ${username}</p>
        </div>

        <div class="header__admin__menu__div">
          <a href="../../index.html"><img src="../../images/logo.png" alt="Pawn.com logo" style="width:100px"></a>
        </div>

        <div class="header__admin__menu__div">
          <nav class="header__admin__menu__div__nav">
            <ul class="header__admin__menu__div__nav__ul">
              <li class="header__admin__menu__div__nav__ul--li"><a href="../welcome.html" class="${pathname === "/admin/welcome.html" ? "active" : ""}">Welcome</a></li>
              <li class="header__admin__menu__div__nav__ul--li"><a href="../products.html" class="${pathname === "/admin/products.html" ? "active" : ""}">Products</a></li>
              <li class="header__admin__menu__div__nav__ul--li"><a href="../order.html" class="${pathname === "/admin/order.html" ? "active" : ""}">Order</a></li>
              <li class="header__admin__menu__div__nav__ul--li"><a href=""  class="header__admin__menu__div__nav__ul--li__a" id="logout">Logout</a></li>
            </ul>
          </nav>
        </div>
      </div>`;
    logoutButton();

  } else {

    let authLink = `<a href="login.html" class="${pathname === '/login.html' ? 'active' : '' || pathname === '/admin/products.html' ? 'active' : ''}">Business</a>`;
    if (username) {
      authLink = `<a href="admin/welcome.html">Back to Dashboard</a>`;
    }

    publicMenu.innerHTML = `
    ${authLink}
    <a href="/" class="${pathname === '/index.html' ? 'active' : '' || pathname === '/products.html' ? 'active' : '' || pathname === '/product-specific.html' ? 'active' : '' || pathname === '/cart.html' ? 'active' : ''}">Private</a>
    `;
    container.innerHTML = `
      <div class="header__admin__menu">
        <div class="header__admin__menu__div">
          <p>Logged in as ${username}</p>
        </div>
        <div class="header__admin__menu__div">
          <a href="../index.html"><img src="../images/logo.png" alt="Pawn.com logo" style="width:100px"></a>
        </div>
        <div class="header__admin__menu__div">
          <nav class="header__admin__menu__div__nav">
            <ul class="header__admin__menu__div__nav__ul">
              <li class="header__admin__menu__div__nav__ul--li">
                <a href="welcome.html" class="header__admin__menu__div__nav__ul--li__a ${pathname === "/admin/welcome.html" ? "active" : ""}">Welcome</a>
              </li>
              <li class="header__admin__menu__div__nav__ul--li">
                <a href="products.html" class="header__admin__menu__div__nav__ul--li__a ${pathname === "/admin/products.html" ? "active" : ""}">Products</a>
              </li>
              <li class="header__admin__menu__div__nav__ul--li">
                <a href="order.html" class="header__admin__menu__div__nav__ul--li__a ${pathname === "/admin/order.html" ? "active" : ""}">Order</a>
              </li>
              <li class="header__admin__menu__div__nav__ul--li">
                <a href="" class="header__admin__menu__div__nav__ul--li__a" id="logout">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>`;

    // main.innerHTML += `
    // <h2>Welcome ${username} </h2>`;

    logoutButton();
  }
};
createMenu();