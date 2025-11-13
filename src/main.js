import { renderizarCatalogo } from "./cartaoProduto.js";
import { inicializarFiltros } from "./filtrosCatalogo.js";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./menuCarrinho.js";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
