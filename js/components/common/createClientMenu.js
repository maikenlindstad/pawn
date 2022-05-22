import { getUserName } from "../../utils/storage.js";

export default function createTopMenu() {
  const { pathname } = document.location;
  const username = getUserName();
  const publicMenu = document.querySelector(".menu-container-public");

  let authLink = `<a href="login.html" class="${pathname === '/login.html' ? 'activeSectionHeader' : '' || pathname === '/client/products.html' ? 'activeSectionHeader' : ''}">Business</a>`;
  if (username) {
    authLink = `<a href="admin/welcome.html">Back to Dashboard</a>`;
  }

  publicMenu.innerHTML = `
    ${authLink}
    <a href="/" class="${pathname === '/index.html' ? 'activeSectionHeader' : '' || pathname === '/products.html' ? 'activeSectionHeader' : '' || pathname === '/product-specific.html' ? 'activeSectionHeader' : '' || pathname === '/cart.html' ? 'activeSectionHeader' : ''}">Private</a>
    `;
};

createTopMenu();