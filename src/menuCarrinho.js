import { catalogo, salvarLocalStorage, lerLocalStorage } from "@/utilidades.js";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

// --- ABRIR E FECHAR CARRINHO ---
function abrirCarrinho() {
  const carrinho = document.getElementById("carrinho");
  carrinho.classList.add("right-[0px]");
  carrinho.classList.remove("right-[-360px]");
}

function fecharCarrinho() {
  const carrinho = document.getElementById("carrinho");
  carrinho.classList.remove("right-[0px]");
  carrinho.classList.add("right-[-360px]");
}

// --- NAVEGAÇÃO PARA CHECKOUT ---
function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) return;
  window.location.href = "/checkout.html";
}

// --- INICIALIZA EVENTOS DO CARRINHO ---
export function inicializarCarrinho() {
  document.getElementById("fechar-carrinho").addEventListener("click", fecharCarrinho);
  document.getElementById("abrir-carrinho").addEventListener("click", abrirCarrinho);
  document.getElementById("finalizar-compra").addEventListener("click", irParaCheckout);
}

// --- MODIFICAÇÕES NO CARRINHO ---
function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
  const qtdElem = document.getElementById(`quantidade-${idProduto}`);
  if (qtdElem) qtdElem.innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

// --- RENDERIZA CADA PRODUTO NO CARRINHO ---
function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find(p => p.id === idProduto);
  const container = document.getElementById("produtos-carrinho");

  const artigo = document.createElement("article");
  artigo.className = "flex bg-slate-100 rounded-lg p-2 gap-3 relative shadow-md items-center";

  artigo.innerHTML = `
    <button id="remover-item-${produto.id}" class="absolute top-1 right-2 text-slate-500 hover:text-slate-800">
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
    <img src="/assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg object-contain" />
    <div class="flex flex-col justify-between flex-1">
      <p class="text-slate-800 text-sm font-medium">${produto.nome}</p>
      <p class="text-slate-500 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg font-semibold">$${produto.preco}</p>
    </div>
    <div class="flex items-center gap-2 text-slate-900 text-lg">
      <button id="decrementar-produto-${produto.id}" class="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300">-</button>
      <p id="quantidade-${produto.id}" class="px-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
      <button id="incrementar-produto-${produto.id}" class="px-2 py-1 bg-slate-200 rounded hover:bg-slate-300">+</button>
    </div>
  `;

  container.appendChild(artigo);

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));
  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));
  document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));
}

// --- RENDERIZA TODOS OS PRODUTOS DO CARRINHO ---
export function renderizarProdutosCarrinho() {
  const container = document.getElementById("produtos-carrinho");
  container.innerHTML = '';
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

// --- ADICIONA PRODUTO AO CARRINHO E ABRE O MENU ---
export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
  } else {
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    desenharProdutoNoCarrinho(idProduto);
  }

  atualizarPrecoCarrinho();
  abrirCarrinho(); // Abre automaticamente ao adicionar
}

// --- ATUALIZA PREÇO TOTAL ---
export function atualizarPrecoCarrinho() {
  const precoElem = document.getElementById("preco-total");
  if (!precoElem) return;

  let total = 0;
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    const produto = catalogo.find(p => p.id === idProduto);
    total += produto.preco * idsProdutoCarrinhoComQuantidade[idProduto];
  }

  precoElem.innerText = `Total: $${total}`;
}