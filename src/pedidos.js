import { lerLocalStorage, desenharProdutoSimples, catalogo } from "./utilidades.js";

// --- CRIA UM CARD PARA CADA PEDIDO ---
function criarPedidoHistorico(pedidoComData) {
  const main = document.getElementsByTagName("main")[0];

  // Container do pedido com estilo moderno
  const containerPedidoWrapper = document.createElement("section");
  containerPedidoWrapper.className = "w-full max-w-4xl bg-white rounded-lg shadow-md p-4 my-6 flex flex-col gap-4";

  // Data do pedido
  const dataPedidoElem = document.createElement("p");
  dataPedidoElem.className = "text-lg font-semibold text-slate-900";
  dataPedidoElem.innerText = new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  containerPedidoWrapper.appendChild(dataPedidoElem);

  // Container dos produtos do pedido
  const containerProdutos = document.createElement("div");
  containerProdutos.className = "flex flex-col gap-3";

  let totalPedido = 0;

  for (const idProduto in pedidoComData.pedido) {
    const quantidade = pedidoComData.pedido[idProduto];
    const produto = catalogo.find(p => p.id === idProduto);

    if (produto) {
      totalPedido += produto.preco * quantidade;

      // Desenha cada produto dentro do pedido
      desenharProdutoSimples(idProduto, containerProdutos, quantidade);
    }
  }

  containerPedidoWrapper.appendChild(containerProdutos);

  // Total do pedido em verde
  const totalElem = document.createElement("p");
  totalElem.className = "text-green-700 font-bold text-lg self-end";
  totalElem.innerText = `Total do pedido: $${totalPedido}`;
  containerPedidoWrapper.appendChild(totalElem);

  main.appendChild(containerPedidoWrapper);
}

// --- RENDERIZA TODOS OS PEDIDOS ---
function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico") ?? [];
  historico.forEach(criarPedidoHistorico);
}

// Inicializa
renderizarHistoricoPedidos();
