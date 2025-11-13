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
  artigo.classList.add("flex", "bg-slate-100", "rounded-lg", "p-1", "relative");

  artigo.innerHTML = `
    <button id="remover-item-${produto.id}" class="absolute top-0 right-2">
      <i class="fa-regular fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img src="/assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg" />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
      <button id='decrementar-produto-${produto.id}'>-</button>
      <p id='quantidade-${produto.id}' class='ml-2'>${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
      <button class='ml-2' id='incrementar-produto-${produto.id}'>+</button>
    </div>`;

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
  abrirCarrinho(); // Abre o carrinho automaticamente ao adicionar
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