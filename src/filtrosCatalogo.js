const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  // Remove a classe "hidden" de todos os produtos
  const produtosEscondidos = catalogoProdutos.querySelectorAll(".hidden");
  produtosEscondidos.forEach(produto => produto.classList.remove("hidden"));
}

function esconderPorClasse(classeParaEsconder) {
  // Primeiro mostra todos, depois esconde os da classe selecionada
  exibirTodos();
  const produtosParaEsconder = catalogoProdutos.querySelectorAll(`.${classeParaEsconder}`);
  produtosParaEsconder.forEach(produto => produto.classList.add("hidden"));
}

function mostrarFemininos() {
  exibirTodos();
  const produtosMasculinos = catalogoProdutos.querySelectorAll(".masculino");
  produtosMasculinos.forEach(produto => produto.classList.add("hidden"));
}

function mostrarMasculinos() {
  exibirTodos();
  const produtosFemininos = catalogoProdutos.querySelectorAll(".feminino");
  produtosFemininos.forEach(produto => produto.classList.add("hidden"));
}

export function inicializarFiltros() {
  document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
  document.getElementById("exibir-femininos").addEventListener("click", mostrarFemininos);
  document.getElementById("exibir-masculinos").addEventListener("click", mostrarMasculinos);
}