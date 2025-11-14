const formCriarConta = document.getElementById("criar-conta-form");

formCriarConta.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  if (!nome || !email || !senha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se o email já existe
  const usuarioExistente = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (usuarioExistente) {
    alert("Este email já está cadastrado!");
    return;
  }

  usuarios.push({ nome, email, senha });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Conta criada com sucesso!");
  window.location.href = "/login.html";
});
