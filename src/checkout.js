import {
  desenharProdutoSimples,
  lerLocalStorage,
  apagarDoLocalStorage,
  salvarLocalStorage,
  catalogo // catálogo para pegar os preços
} from "./utilidades.js";

function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }

  atualizarPrecoTotal(idsProdutoCarrinhoComQuantidade);
}

// --- FUNÇÃO PARA CALCULAR TOTAL ---
function atualizarPrecoTotal(idsProdutoCarrinhoComQuantidade) {
  const precoElem = document.getElementById("preco-total");
  if (!precoElem) return;

  let total = 0;
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    const produto = catalogo.find(p => p.id === idProduto);
    total += produto.preco * idsProdutoCarrinhoComQuantidade[idProduto];
  }

  precoElem.innerText = `Total: $${total}`;
}

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

// --- INICIALIZA ---
desenharProdutosCheckout();

const formCheckout = document.querySelector("form");
if (formCheckout) {
  formCheckout.addEventListener("submit", finalizaCompra);
}