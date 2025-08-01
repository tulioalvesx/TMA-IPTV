document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");
  productList.innerHTML = `
    <div style="border:1px solid #ccc; padding:1rem;">
      <h2>EPPI Cinema</h2>
      <p>Assista filmes e séries com qualidade premium.</p>
      <button onclick="window.location.href='produto-eppi.html'">Ver detalhes</button>
    </div>
  `;
});