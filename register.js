// Recupera usuários salvos
let users = JSON.parse(localStorage.getItem("users")) || [];

// Função para salvar novo usuário
function saveUser(username, password) {
  if(users.some(u => u.username === username)) return false; // já existe
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

const registerForm = document.getElementById("registerForm");
const msg = document.getElementById("msg");

registerForm.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("regUser").value.trim();
  const password = document.getElementById("regPass").value.trim();

  if(saveUser(username, password)){
    msg.textContent = "Usuário registrado com sucesso! Agora faça login.";
    msg.style.color = "lightgreen";

    // Redireciona para login após 1,5s
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  } else {
    msg.textContent = "Usuário já existe!";
    msg.style.color = "orange";
  }

  registerForm.reset();
});
