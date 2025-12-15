// ===== DOM Elements =====
const slides = document.querySelector(".slides");
const projetos = document.querySelectorAll(".projeto");
const btnAnterior = document.querySelector(".btn-anterior");
const btnProximo = document.querySelector(".btn-proximo");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinkElements = document.querySelectorAll(".nav-link");
const logoLink = document.getElementById("logoLink");
const textElement = document.getElementById("text");
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// ===== Carousel Variables =====
let index = 0;
let intervalo;
let touchStartX = 0;
let touchEndX = 0;

// ===== Carousel Functions =====
const mostrarSlide = () => {
  slides.style.transform = `translateX(-${index * 100}%)`;
};

const avancarAutomaticamente = () => {
  if (intervalo) clearInterval(intervalo);
  intervalo = setInterval(() => {
    index = (index + 1) % projetos.length;
    mostrarSlide();
  }, 9000);
};

/**
 * Detecta a direção do swipe no mobile
 */
const handleSwipe = () => {
  const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe para esquerda - próximo slide
      index = (index + 1) % projetos.length;
    } else {
      // Swipe para direita - slide anterior
      index = (index - 1 + projetos.length) % projetos.length;
    }
    mostrarSlide();
    avancarAutomaticamente();
  }
};

// ===== Carousel Events =====
btnProximo.addEventListener("click", () => {
  index = (index + 1) % projetos.length;
  mostrarSlide();
  avancarAutomaticamente();
});

btnAnterior.addEventListener("click", () => {
  index = (index - 1 + projetos.length) % projetos.length;
  mostrarSlide();
  avancarAutomaticamente();
});

// ===== Touch Events para Swipe (Mobile) =====
slides.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

slides.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

avancarAutomaticamente();

// ===== Typing Animation =====
const textToType = "Front-End";
let typingIndex = 0;
let deleting = false;

const typeWriter = () => {
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
};

typeWriter();

// ===== Navigation Functions =====
const closeMenu = () => {
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
};

// ===== Hamburger Menu =====
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinkElements.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-href");
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  });
});

// ===== Logo Click =====
logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Close Menu on Scroll =====
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    closeMenu();
  }
});

// ===== Theme Toggle =====
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseLightMode =
  savedTheme === "light" || (!savedTheme && !prefersDark);

if (shouldUseLightMode) {
  html.classList.add("light-mode");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("light-mode");
  localStorage.setItem(
    "theme",
    html.classList.contains("light-mode") ? "light" : "dark"
  );
});
