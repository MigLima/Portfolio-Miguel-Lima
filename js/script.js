const slides = document.querySelector(".slides");
const projetos = document.querySelectorAll(".projeto");
const btnAnterior = document.querySelector(".btn-anterior");
const btnProximo = document.querySelector(".btn-proximo");

let index = 0;
let intervalo;

// Função para mostrar o slide de acordo com o índice
const mostrarSlide = () => {
  slides.style.transform = `translateX(-${index * 100}%)`;
};

// Função para avançar automaticamente
const avancarAutomaticamente = () => {
  if (intervalo) clearInterval(intervalo);
  intervalo = setInterval(() => {
    index = (index + 1) % projetos.length;
    mostrarSlide();
  }, 9000);
};

// Avançar para o próximo slide
btnProximo.addEventListener("click", () => {
  index = (index + 1) % projetos.length;
  mostrarSlide();
  avancarAutomaticamente();
});

// Voltar para o slide anterior
btnAnterior.addEventListener("click", () => {
  index = (index - 1 + projetos.length) % projetos.length;
  mostrarSlide();
  avancarAutomaticamente();
});

// Iniciar o avanço automático ao carregar a página
avancarAutomaticamente();

// Lógica da animação de escrita
const textElement = document.getElementById("text");
const textToType = "Front-End";
let typingIndex = 0;
let deleting = false;

function typeWriter() {
  if (!deleting && typingIndex === 0) {
    textElement.textContent = "";
  }

  if (!deleting && typingIndex < textToType.length) {
    textElement.textContent += textToType.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeWriter, 150);
  } else if (deleting && typingIndex > 0) {
    textElement.textContent = textToType.substring(0, typingIndex - 1);
    typingIndex--;
    setTimeout(typeWriter, 100);
  } else {
    deleting = !deleting;
    setTimeout(typeWriter, 500);
  }
}

// Iniciar a animação
typeWriter();

// Menu hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Scroll suave para o topo ao clicar no logo
const logoLink = document.getElementById("logoLink");
logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Links de navegação
const navLinkElements = document.querySelectorAll(".nav-link");
navLinkElements.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Fecha o menu mobile se estiver aberto
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Theme Toggle - Light/Dark Mode
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Verificar preferência salva ou preferência do sistema
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseLightMode =
  savedTheme === "light" || (!savedTheme && !prefersDark);

if (shouldUseLightMode) {
  html.classList.add("light-mode");
}

// Alternar tema ao clicar
themeToggle.addEventListener("click", () => {
  html.classList.toggle("light-mode");
  localStorage.setItem(
    "theme",
    html.classList.contains("light-mode") ? "light" : "dark"
  );
});
