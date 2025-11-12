/* ---------- Alternar entre Login e Cadastro ---------- */
const toRegister = document.getElementById("toRegister");
const toLogin = document.getElementById("toLogin");
const loginBox = document.getElementById("login");
const registerBox = document.getElementById("register");

toRegister.addEventListener("click", () => {
  loginBox.classList.add("hidden");
  registerBox.classList.remove("hidden");
});

toLogin.addEventListener("click", () => {
  registerBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

/* ---------- Validação de Cadastro ---------- */
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmarSenha").value;

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  alert(`Cadastro realizado com sucesso!\nBem-vindo, ${nome}!`);
  e.target.reset();
  toLogin.click();
});

/* ---------- Validação de Login ---------- */
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value;

  if (!email.includes("@") || senha.length < 6) {
    alert("Credenciais inválidas!");
    return;
  }

  alert(`Bem-vindo de volta, ${email}!`);
});


/* ---------- Alternância de tema claro/escuro ---------- */
const themeSwitch = document.getElementById("themeSwitch");

/* ---------- Mantém preferência salva ---------- */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeSwitch.checked = true;
}

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
