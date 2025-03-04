const button = document.getElementById("toggle-theme");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Armazena a escolha do usuário no localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Verifica a preferência salva no localStorage ao carregar a página
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});