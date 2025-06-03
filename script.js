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
  intervalo = setInterval(() => {
    index = (index + 1) % projetos.length;
    mostrarSlide();
  }, 9000); // 9 segundos
};

// Parar o avanço automático ao interagir com os botões
const pararAvancoAutomatico = () => {
  clearInterval(intervalo);
  avancarAutomaticamente();
};

// Avançar para o próximo slide
btnProximo.addEventListener("click", () => {
  index = (index + 1) % projetos.length;
  mostrarSlide();
  pararAvancoAutomatico(); // Reinicia o intervalo após interação
});

// Voltar para o slide anterior
btnAnterior.addEventListener("click", () => {
  index = (index - 1 + projetos.length) % projetos.length;
  mostrarSlide();
  pararAvancoAutomatico(); // Reinicia o intervalo após interação
});

// Iniciar o avanço automático ao carregar a página
avancarAutomaticamente();

// Lógica da animação de escrita
const textElement = document.getElementById("text");
const textToType = "Front-End";
let typingIndex = 0; // Mudando o nome da variável para evitar conflito
let deleting = false; // Controla se está apagando ou escrevendo

function typeWriter() {
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


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
