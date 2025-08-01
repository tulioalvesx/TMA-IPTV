
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const groupParam = urlParams.get("grupo");

  if (!groupParam) {
    const erro = document.createElement("p");
    erro.textContent = "Grupo não encontrado.";
    document.getElementById("conteudo")?.appendChild(erro);
    return;
  }

  const titulo = document.createElement("h2");
  titulo.textContent = groupParam.toUpperCase();
  document.getElementById("conteudo")?.appendChild(titulo);

  fetch("produtos.json")
    .then((response) => response.json())
    .then((produtos) => {
      const grupoProdutos = produtos.filter(
        (produto) => produto.grupo.toLowerCase() === groupParam.toLowerCase()
      );

      if (grupoProdutos.length === 0) {
        const nenhum = document.createElement("p");
        nenhum.textContent = "Nenhum produto encontrado para este grupo.";
        document.getElementById("conteudo")?.appendChild(nenhum);
        return;
      }

      const container = document.createElement("section");
      container.className = "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4";

      grupoProdutos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "bg-gray-800 rounded-xl p-4 shadow-md relative";

        card.innerHTML = `
          <div class="relative">
            <img src="${produto.imagem}" alt="${produto.nome}" class="rounded-xl mb-4 w-full h-48 object-cover">
            ${
              produto.estoque === false
                ? '<div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">ESGOTADO</div>'
                : produto.promocao
                ? `<div class="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">${produto.promocao}</div>`
                : ""
            }
          </div>
          <h3 class="text-white text-lg font-bold mb-1">${produto.nome}</h3>
          <p class="text-sm text-gray-300 mb-2">${produto.complemento}</p>
          <p class="text-white text-xl font-bold mb-2">R$ ${produto.valor}</p>
          <label class="text-gray-400 text-sm block mb-1">Descrição:</label>
          <textarea class="w-full h-20 text-sm p-2 rounded bg-gray-700 text-white mb-4" placeholder="Escreva os detalhes aqui..."></textarea>
          <div class="flex justify-between">
            <a href="${produto.link_pagamento}" class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm">Comprar</a>
            <a href="${produto.link_download}" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm">Download</a>
          </div>
        `;

        container.appendChild(card);
      });

      document.getElementById("conteudo")?.appendChild(container);
    })
    .catch((error) => {
      console.error("Erro ao carregar produtos:", error);
      const erro = document.createElement("p");
      erro.textContent = "Erro ao carregar os produtos.";
      document.getElementById("conteudo")?.appendChild(erro);
    });
});
