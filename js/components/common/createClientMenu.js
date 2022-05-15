import { getUserName } from "../../utils/storage.js";

export default function createTopMenu() {
  const { pathname } = document.location;
  const username = getUserName();
  const publicMenu = document.querySelector(".menu-container-public");

  let authLink = `<a href="login.html" class="${pathname === '/login.html' ? 'active' : '' || pathname === '/client/products.html' ? 'active' : ''}">Business</a>`;
  if (username) {
    authLink = `<a href="admin/welcome.html">Back to Dashboard</a>`;
  }

  publicMenu.innerHTML = `
    ${authLink}
    <a href="/" class="${pathname === '/index.html' ? 'active' : '' || pathname === '/products.html' ? 'active' : '' || pathname === '/product-specific.html' ? 'active' : '' || pathname === '/cart.html' ? 'active' : ''}">Private</a>
    `;
};

createTopMenu();