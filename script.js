document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;

  // Verifica se o modo escuro estava ativado anteriormente
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '🌞'; // Muda o ícone para o sol
  }

  // Alterna entre modo claro e escuro
  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      toggleButton.textContent = '🌙'; // Muda o ícone para a lua
      localStorage.setItem('dark-mode', 'disabled');
    } else {
      body.classList.add('dark-mode');
      toggleButton.textContent = '🌞'; // Muda o ícone para o sol
      localStorage.setItem('dark-mode', 'enabled');
    }
  });

  // Adiciona classe "scrolled" ao header quando o usuário rola a página
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});