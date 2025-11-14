import { adicionarAoCarrinho } from "@/menuCarrinho.js";
import { catalogo } from "@/utilidades.js";

export function renderizarCatalogo() {
  const container = document.getElementById("container-produto");
  container.innerHTML = ""; // Limpa antes de renderizar

  for (const produto of catalogo) {
    const card = document.createElement("div");
    card.id = `card-produto-${produto.id}`;
    card.className = `border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produto.feminino ? 'feminino' : 'masculino'}`;

    card.innerHTML = `
      <img 
        src="/assets/img/${produto.imagem}" 
        alt="${produto.nome}" 
        class="group-hover:scale-110 duration-300 my-3 rounded-lg"
      />
      <p class="text-sm font-medium text-slate-800">${produto.marca}</p>
      <p class="text-sm text-slate-700">${produto.nome}</p>
      <p class="text-sm text-green-700 font-semibold">$${produto.preco}</p>
      <button 
        id="adicionar-${produto.id}" 
        class="mt-2 bg-slate-900 hover:bg-slate-700 text-slate-200 py-1 rounded font-medium transition-colors duration-200">
        <i class="fa-solid fa-cart-plus"></i> Adicionar
      </button>
    `;

    container.appendChild(card);

    // Adiciona evento ao botão
    document
      .getElementById(`adicionar-${produto.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produto.id));
  }
}