// Recupera usuários salvos
let users = JSON.parse(localStorage.getItem("users")) || [];

function checkLogin(username, password) {
  return users.some(u => u.username === username && u.password === password);
}

const loginForm = document.getElementById("loginForm");
const msg = document.getElementById("msg");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();

  const username = document.getElementById("loginUser").value.trim();
  const password = document.getElementById("loginPass").value.trim();

  if(checkLogin(username, password)){
    msg.textContent = "Login bem-sucedido!";
    msg.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    msg.textContent = "Usuário ou senha incorretos!";
    msg.style.color = "red";
  }

  loginForm.reset();
});
