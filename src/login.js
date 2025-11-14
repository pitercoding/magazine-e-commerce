const formLogin = document.getElementById("login-form");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioValido = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha);

  if (usuarioValido) {
    // Salva usuário logado
    localStorage.setItem("usuarioLogado", JSON.stringify({ nome: usuarioValido.nome, email: usuarioValido.email }));
    alert(`Login realizado com sucesso!\nBem-vindo, ${usuarioValido.nome}!`);
    window.location.href = "/index.html";
  } else {
    alert("Email ou senha incorretos.");
  }
});