
document.addEventListener("DOMContentLoaded", () => {
  const groupList = document.getElementById("group-list");
  const params = new URLSearchParams(window.location.search);
  const groupParam = params.get("grupo");
  const saved = JSON.parse(localStorage.getItem("tma_produtos") || "{}");

  if (groupParam) {
    // Página produto.html: renderizar itens do grupo
    const produtos = saved[groupParam] || [];
    if (produtos.length === 0) {
      document.body.innerHTML += "<p>Grupo não encontrado.</p>";
      return;
    }

    document.body.innerHTML += `<h2>${groupParam.toUpperCase()}</h2>`;
    const container = document.createElement("section");
    container.classList.add("produto-detalhes");

    produtos.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("produto");

      let descontoHTML = "";
      if (prod.desconto && parseInt(prod.desconto) > 0) {
        descontoHTML = `<span class='desconto'>${prod.desconto}% OFF</span>`;
      }

      card.innerHTML = `
        <img src="assets/${prod.imagem}" alt="${prod.nome}" />
        <h3>${prod.nome}</h3>
        ${descontoHTML}
        <p>${prod.descricao}</p>
        <p>💰 <strong>R$ ${prod.preco}</strong></p>
        <a href="${prod.linkPagamento}" class="botao">Comprar</a>
        <a href="${prod.linkDownload}" class="botao secundario">Download</a>
      `;
      container.appendChild(card);
    });

    document.body.appendChild(container);

  } else if (groupList) {
    // Página index.html: renderizar grupos
    Object.keys(saved).forEach(grupo => {
      const div = document.createElement("div");
      div.classList.add("grupo");
      div.innerHTML = `
        <h2>${grupo.toUpperCase()}</h2>
        <a href="produto.html?grupo=${grupo}" class="botao">Ver detalhes</a>
      `;
      groupList.appendChild(div);
    });
  }
});
