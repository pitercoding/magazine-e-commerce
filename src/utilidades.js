export const catalogo = [
    { 
      id: "1", 
      marca: 'Zara', 
      nome: 'Camisa Larga com Bolsos', 
      preco: 70, 
      imagem: 'product-1.jpg', 
      feminino: false, 
    }, 
    { 
      id: "2", 
      marca: 'Zara', 
      nome: 'Casaco Reto com Lã', 
      preco: 85, 
      imagem: 'product-2.jpg', 
      feminino: true, 
    }, 
    { 
      id: "3", 
      marca: 'Zara', 
      nome: 'Jaqueta com Efeito Camurça', 
      preco: 60, 
      imagem: 'product-3.jpg', 
      feminino: false, 
    }, 
    { 
      id: "4", 
      marca: 'Zara', 
      nome: 'Sobretudo em Mescla de Lã', 
      preco: 160, 
      imagem: 'product-4.jpg', 
      feminino: false, 
    }, 
    { 
      id: "5", 
      marca: 'Zara', 
      nome: 'Camisa Larga Acolchoada de Veludo Cotelê', 
      preco: 110, 
      imagem: 'product-5.jpg', 
      feminino: false, 
    }, 
    { 
      id: "6", 
      marca: 'Zara',
      nome: 'Casaco de Lã com Botões', 
      preco: 170, 
      imagem: 'product-6.jpg', 
      feminino: true, 
    }, 
    { 
      id: "7",
      marca: 'Zara', 
      nome: 'Casaco com Botões', 
      preco: 75, 
      imagem: 'product-7.jpg', 
      feminino: true, 
    }, 
    { 
      id: "8", 
      marca: 'Zara', 
      nome: 'Colete Comprido com Cinto', 
      preco: 88, 
      imagem: 'product-8.jpg', 
      feminino: true, 
    }
  ];
  
  // Função para salvar dados no LocalStorage
  export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
  }
  
  // Função para ler dados do LocalStorage
  export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }
  
  // Função para apagar dados do LocalStorage
  export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
  }
  
// Função para desenhar um produto simples (usado em carrinho, checkout e pedidos)
export function desenharProdutoSimples(idProduto, container, quantidadeProduto) {
  const produto = catalogo.find(p => p.id === idProduto);

  if (!produto) return;

  // Se o container for string, pega o elemento pelo ID
  if (typeof container === "string") {
    container = document.getElementById(container);
  }

  const artigo = document.createElement("article");
  artigo.className = "flex bg-slate-100 rounded-lg p-3 relative shadow-md mb-3 w-full lg:w-full";

  artigo.innerHTML = `
    <div class="flex gap-3">
      <img src="/assets/img/${produto.imagem}" alt="${produto.nome}" class="w-24 h-24 rounded-lg object-contain" />
      <div class="flex-1 flex flex-col justify-between">
        <p class="text-sm font-semibold text-slate-900">${produto.marca}</p>
        <p class="text-sm text-slate-800">${produto.nome}</p>
        <p class="text-green-700 text-lg font-bold">$${produto.preco}</p>
      </div>
    </div>
    <div class="flex justify-end mt-2">
      <p class="font-medium text-slate-900">Qtd: <span id="quantidade-${produto.id}" class="text-green-700">${quantidadeProduto}</span></p>
    </div>
  `;

  container.appendChild(artigo);
}

  