import { lerLocalStorage, desenharProdutoSimples, catalogo } from "./utilidades.js";

function criarPedidoHistorico(pedidoComData) {
  const main = document.getElementsByTagName("main")[0];

  // Cria container do pedido
  const elementoPedido = `
    <p class="text-xl font-bold my-4">${new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })}</p>
    <section id="container-pedidos-${pedidoComData.dataPedido}" class="bg-slate-300 p-3 rounded-md"></section>
  `;
  main.innerHTML += elementoPedido;

  let totalPedido = 0;

  for (const idProduto in pedidoComData.pedido) {
    const quantidade = pedidoComData.pedido[idProduto];
    const produto = catalogo.find(p => p.id === idProduto);

    if (produto) {
      totalPedido += produto.preco * quantidade;
      desenharProdutoSimples(
        idProduto,
        `container-pedidos-${pedidoComData.dataPedido}`,
        quantidade
      );
    }
  }

  // Adiciona o total do pedido
  const containerPedido = document.getElementById(`container-pedidos-${pedidoComData.dataPedido}`);
  const totalElem = document.createElement("p");
  totalElem.className = "text-lg font-bold text-green-800 mt-2";
  totalElem.innerText = `Total do pedido: $${totalPedido}`;
  containerPedido.appendChild(totalElem);
}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico") ?? [];
  historico.forEach(criarPedidoHistorico);
}

renderizarHistoricoPedidos();
