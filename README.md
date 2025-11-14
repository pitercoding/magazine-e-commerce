# 🛍️ Magazine E-commerce

Este é um projeto de **E-commerce** desenvolvido com **Tailwind CSS** e **Vite**, simulando um site de compras online moderno.  

O sistema permite navegar pelo **catálogo de produtos**, adicionar itens ao **carrinho**, realizar **checkout** com dados de pagamento e entrega, além de acompanhar o **histórico de pedidos**.

O projeto foi totalmente modernizado, com **layout padronizado, identidade visual própria (logo e favicon)** e novas funcionalidades implementadas em JavaScript.

## 🚀 Objetivos do Projeto

- Criar um **E-commerce funcional e responsivo**, utilizando **Tailwind CSS** para estilização moderna.
- Implementar **interatividade com JavaScript**, incluindo:
  - Adição de produtos ao carrinho
  - Atualização do total de compra
  - Checkout simplificado
  - Histórico de pedidos com layout moderno
- Aplicar **boa arquitetura de front-end**, com separação de responsabilidades em diferentes módulos JS:
  - `cartaoProduto.js` → renderização de cards de produtos
  - `checkout.js` → lógica do checkout
  - `pedidos.js` → histórico de pedidos
  - `menuCarrinho.js` → controle do carrinho de compras
  - `login.js` → validação para login
  - `criar-conta.js` → cria e valida conta do usuário 
  - `utilidades.js` → funções utilitárias para persistência e renderização
- Garantir **identidade visual consistente**, com fontes, cores, header e botões padronizados.

## 🖥️ Funcionalidades Implementadas

- **Catálogo de Produtos**
  - Exibição de produtos com imagem, nome e preço.
  - Cards responsivos que se adaptam a diferentes tamanhos de tela.

- **Carrinho de Compras**
  - Adição de produtos e cálculo automático do total.
  - Total destacado em verde para melhor visibilidade.
  - Layout harmonizado com o restante do site.

- **Checkout**
  - Conferência de produtos e quantidades.
  - Formulário completo para dados de usuário, endereço, pagamento e entrega.
  - Botão de Finalizar Compra que registra pedido no histórico.
  - Layout moderno com cards e cores padronizadas.

- **Histórico de Pedidos**
  - Lista todos os pedidos realizados pelo usuário.
  - Total de cada pedido destacado em verde.
  - Layout responsivo e moderno.

- **Autenticação de Usuário**
  - Páginas de `login.html` e `criar-conta.html` integradas.
  - Formulários de validação para criação de conta e login.
  - Armazenamento de usuários no `localStorage`.
  - Ícone de usuário no header direciona para login ou criação de conta.
  - Estilo consistente com o restante do site.

- **Identidade Visual**
  - Nova **logo oficial do projeto** (PNG, alta resolução) inserida em todos os HTMLs.
  - Novo **favicon** atualizado em todos os HTMLs.
  - Fontes, cores e botões harmonizados em todas as páginas.

## 🏗️ Estrutura do Projeto

```markdown
magazine-e-commerce/
├── public/
│   ├── assets/
│   │   ├── logo/
│   │   │   └── logo.png
│   │   └── img/
│   │       ├── product-1.jpg
│   │       ├── product-2.jpg
│   │       └── ...
│   └── favicon.ico
│
├── src/
│   ├── cartaoProduto.js       # Renderização dos cards de produtos
│   ├── checkout.js            # Lógica do checkout
│   ├── criar-conta.js         # Criação de conta e validação
│   ├── filtrosCatalogo.js     # Filtros e pesquisa do catálogo
│   ├── login.js               # Validação e login de usuários
│   ├── main.js                # Script principal do projeto
│   ├── menuCarrinho.js        # Controle do carrinho
│   ├── pedidos.js             # Histórico de pedidos
│   ├── styles.css             # CSS principal (Tailwind)
│   └── utilidades.js          # Funções utilitárias (localStorage, render)
│
├── index.html                 # Página principal / catálogo de produtos
├── checkout.html              # Página de checkout
├── pedidos.html               # Página de histórico de pedidos
├── login.html                 # Página de login
├── criar-conta.html           # Página de criação de conta
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .gitignore
└── README.md
```

## 📦 Tecnologias Utilizadas

- **Tailwind CSS** – Estilização moderna e responsiva.
- **Vite** – Build tool para desenvolvimento ágil.
- **PostCSS** – Configuração e otimização de CSS.
- **JavaScript** – Lógica de interatividade, manipulação de DOM e armazenamento no localStorage.

## 🔧 Como rodar o projeto
``` bash
# Clone o repositório
git clone https://github.com/pitercoding/magazine-e-commerce.git

# Entre na pasta do projeto
cd magazine-e-commerce

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Abra no navegador em
http://localhost:5173
```
## 💡 Melhorias Futuras

- Implementar **autenticação real com backend** (API ou banco de dados).
- Adicionar **busca e filtros** avançados no catálogo.
- Criar relatórios e analytics para pedidos.
- Implementar testes automatizados de interface e funcionalidades.
- Melhorias de acessibilidade e performance.

## 🤝 Contribuições
Contribuições são bem-vindas!
- Faça um fork do projeto.
- Crie uma branch para sua feature (`git checkout -b minha-feature`).
- Commit suas alterações (`git commit -am 'Adicionando nova feature'`).
- Envie para a branch principal (`git push origin minha-feature`).
- Abra um Pull Request.

## 👨‍💻 Autor
Desenvolvido por **pitercoding** como projeto de aprendizado em Front-end e modernização de UI.

## 📄 Licença
Este projeto está licenciado sob a **MIT License**.

