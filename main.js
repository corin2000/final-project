import "./style.css";

window.addEventListener(`load`, showProducts);
async function showProducts() {
  console.log(`Page fully loaded!`);
  var response = await fetch(
    `https://652bdb88d0d1df5273eecf7b.mockapi.io/products`
  );
  var products = await response.json();
  console.log(products);

  var productsDiv = document.getElementById("products");
  var productsHTML = "";

  for (var i = 0; i <= products.length - 1; i++) {
    productsHTML += `<div class="card">
    <img src=${products[1].imageURL} />
  </div>`;
  }
  productsDiv.innerHTML = productsHTML;
}
