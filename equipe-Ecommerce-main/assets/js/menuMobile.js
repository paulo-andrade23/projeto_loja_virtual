const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menuMobile");
document.addEventListener("DOMContentLoaded", function() {
  // Seleciona a li do tema
  const themeLi = document.getElementById("btn-theme");
  // Seleciona a div com id openConfig
  const openConfigDiv = document.getElementById("openConfig");

  // Adiciona um ouvinte de evento de clique à li do tema
  themeLi.addEventListener("click", function() {
    // Chama a função para fechar a div
    fecharOpenConfig();
  });

  // Função para fechar a div openConfig
  function fecharOpenConfig() {
    openConfigDiv.style.display = "none";
  }
});

function handleButtonClick(event) {
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
  toggleHamburgerIcon();
}

function toggleHamburgerIcon() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const btnMenu = document.querySelector('.btn-menu');

  if (hamburgerIcon) {
    if (nav.classList.contains("active")) {
      hamburgerIcon.classList.add("close-icon");
      btnMenu.setAttribute("aria-label", "Fechar Menu");
    } else {
      hamburgerIcon.classList.remove("close-icon");
      btnMenu.setAttribute("aria-label", "Abrir Menu");
    }
  }
}



function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);
