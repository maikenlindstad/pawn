import { getToken } from "../utils/storage.js";
import { baseUrl } from "../settings/api.js";

export default function deleteButton(id) {
  const container = document.querySelector(".delete-container");
  container.innerHTML = `<button type="button" class="delete  main__admin__div__page__add--product__div__form__div__button"">Delete</button>`;

  const button = document.querySelector("button.delete");

  button.onclick = async function () {
    console.log(id);

    const doDelete = confirm("Are you sure you want to delete this?");

    if (doDelete) {
      const url = baseUrl + "api/products/" + id;

      const token = getToken();

      const fullToken = "Bearer " + token;

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `${fullToken}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        location.href = "../products.html";
      }
      catch (error) {
        console.log(error);
      }
    }


  }
}