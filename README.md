# Magazine E-commerce

Bem-vindo ao projeto de um **E-commerce** desenvolvido com **Tailwind CSS** e **Vite**. Este projeto simula um site de compras online, com funcionalidades de navegação por catálogo de produtos, adição ao carrinho, checkout e visualização de pedidos realizados.

## 🚀 Funcionalidades

- **Catálogo de Produtos**: Exibição de produtos com filtros de categorias.
- **Carrinho de Compras**: Adição de produtos ao carrinho e visualização de itens selecionados.
- **Checkout**: Preenchimento de dados de pagamento, entrega e finalização da compra.
- **Histórico de Pedidos**: Armazenamento e exibição de pedidos realizados pelo usuário.

## 📦 Tecnologias Utilizadas

- **Tailwind CSS**: Para estilização rápida e responsiva.
- **Vite**: Ferramenta de build para otimização do fluxo de desenvolvimento.
- **PostCSS**: Para a configuração e otimização do CSS.
- **JavaScript**: Para a implementação das funcionalidades de interação e manipulação de dados.

## 🔧 Como rodar o projeto

### 1. Clone este repositório

```bash
git clone https://github.com/pitercoding/magazine-e-commerce.git
```
### 2. Navegue até a pasta do projeto
```bash
cd magazine-e-commerce
```
### 3. Instale as dependências
```bash
npm install
```
### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```
### 5. Acesse o projeto
Abra seu navegador e acesse o endereço http://localhost:3000.<br><br>

## 🛠️ Estrutura do Projeto
```markdown
magazine-e-commerce/
│
├─ .gitignore
├─ checkout.html
├─ index.html
├─ pedidos.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ Readme.md
│
├─ /public
│   ├─ /assets
│   │   ├─ /img
│   │   │   ├─ product-1.jpg
│   │   │   ├─ product-2.jpg
│   │   │   └─ ...
│   │   └─ /logo
│   │       └─ hashtag.svg
│   └─ favicon.ico
│
└─ /src
    ├─ styles.css
    ├─ cartaoProduto.js
    ├─ main.js
    ├─ pedidos.js
    ├─ checkout.js
    ├─ filtrosCatalogo.js
    ├─ menuCarrinho.js
    └─ utilidades.js
```

## 💡 Contribuindo

* Faça um fork do projeto.
* Crie uma branch para sua feature (git checkout -b minha-feature).
* Faça o commit das suas alterações (git commit -am 'Adicionando nova feature').
* Envie para a branch principal (git push origin minha-feature).
* Abra um pull request.

## 📄 Licença
Este projeto está licenciado sob a MIT License.

