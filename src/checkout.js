import {
  catalogo,
  lerLocalStorage,
  salvarLocalStorage,
  apagarDoLocalStorage
} from "./utilidades.js";

// --- FUNÇÃO PARA DESENHAR PRODUTO NO CHECKOUT (quantidade fixa) ---
function desenharProdutoCheckout(idProduto, containerId, quantidade) {
  const produto = catalogo.find(p => p.id === idProduto);
  const container = document.getElementById(containerId);
  if (!produto || !container) return;

  const card = document.createElement("div");
  card.className = `border-solid w-full max-w-full lg:w-full flex flex-col p-3 justify-between shadow-xl shadow-slate-400 rounded-lg bg-slate-100 mb-3`;

  card.innerHTML = `
    <div class="flex gap-3">
      <img 
        src="/assets/img/${produto.imagem}" 
        alt="${produto.nome}" 
        class="w-24 h-24 rounded-lg object-contain"
      />
      <div class="flex-1 flex flex-col justify-between">
        <p class="text-sm font-semibold text-slate-900">${produto.marca}</p>
        <p class="text-sm text-slate-800">${produto.nome}</p>
        <p class="text-green-700 text-lg font-bold">$${produto.preco}</p>
        <p class="text-sm mt-1">Quantidade: <span class="font-medium text-green-700">${quantidade}</span></p>
      </div>
    </div>
  `;

  container.appendChild(card);
}

// --- FUNÇÃO PARA RENDERIZAR TODOS OS PRODUTOS ---
function renderizarProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  const container = document.getElementById("container-produtos-checkout");
  if (!container) return;
  container.innerHTML = "";

  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCheckout(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
  }

  atualizarPrecoTotal(idsProdutoCarrinhoComQuantidade);
}

// --- FUNÇÃO PARA ATUALIZAR TOTAL ---
function atualizarPrecoTotal(idsProdutoCarrinhoComQuantidade) {
  const precoElem = document.getElementById("preco-total");
  if (!precoElem) return;

  let total = 0;
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    const produto = catalogo.find(p => p.id === idProduto);
    total += produto.preco * idsProdutoCarrinhoComQuantidade[idProduto];
  }

  precoElem.innerText = `Total: $${total}`;
  precoElem.classList.remove("text-slate-800", "text-slate-900", "text-black");
  precoElem.classList.add("text-green-700", "font-bold", "text-lg");
}

// --- FINALIZA COMPRA ---
function finalizaCompra(evento) {
  evento.preventDefault();
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) return;

  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade
  };

  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoAtualizado = [pedidoFeito, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoAtualizado);
  apagarDoLocalStorage("carrinho");

  window.location.href = "/pedidos.html";
}

// --- INICIALIZA QUANDO O DOM ESTIVER PRONTO ---
document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutosCheckout();

  const formCheckout = document.querySelector("form");
  if (formCheckout) {
    formCheckout.addEventListener("submit", finalizaCompra);
  }
});