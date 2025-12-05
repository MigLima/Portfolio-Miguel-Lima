# 📖 Guidelines de Código

Padrões e convenções para manter o código consistente e profissional.

## HTML Guidelines

### Estrutura Semântica

Use elementos semânticos apropriados:

```html
<!-- ✅ Bom -->
<nav class="navbar">
  <ul class="nav-links">
    <li><a href="#sobre">Sobre</a></li>
  </ul>
</nav>

<main>
  <section id="sobre">
    <h1>Título Principal</h1>
    <article>Conteúdo</article>
  </section>
</main>

<footer>
  <p>&copy; 2025</p>
</footer>

<!-- ❌ Ruim -->
<div id="navigation">
  <div class="links">
    <div><a href="#sobre">Sobre</a></div>
  </div>
</div>

<div id="main">
  <div id="sobre">
    <h1>Título</h1>
  </div>
</div>
```

### Atributos Essenciais

```html
<!-- Alt em imagens -->
<img src="image.jpg" alt="Descrição clara da imagem" />

<!-- Aria-labels em botões sem texto -->
<button class="hamburger" aria-label="Abrir menu de navegação">
  <span></span>
</button>

<!-- Links externos com segurança -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link Externo
</a>

<!-- Labels para inputs -->
<label for="email">Email:</label>
<input id="email" type="email" name="email" />
```

### Indentação

```html
<!-- Use 2 espaços para indentação -->
<main>
  <section>
    <div>
      <p>Texto</p>
    </div>
  </section>
</main>
```

### Ordem de Elementos na Head

```html
<head>
  <!-- Metadados (charset deve ser primeiro) -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO -->
  <meta name="description" content="..." />
  <meta name="keywords" content="..." />
  <meta name="author" content="..." />

  <!-- Open Graph (redes sociais) -->
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />

  <!-- Título da página -->
  <title>Miguel Lima Pires - Desenvolvedor Front-End</title>

  <!-- Favicon -->
  <link rel="icon" href="assets/favicons/favicon.png" />

  <!-- Fonts externas -->
  <link href="https://fonts.googleapis.com/..." rel="stylesheet" />

  <!-- CSS local -->
  <link rel="stylesheet" href="css/style.css" />

  <!-- CSS externo (bibliotecas) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/..." />
</head>
```

## CSS Guidelines

### Estrutura do Arquivo

```css
/* 1. Reset e globais */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: ...;
  color: ...;
}

/* 2. Variáveis CSS (custom properties) */
:root {
  --color-primary: #111;
  --color-accent: #7c3aed;
  --spacing-unit: 1rem;
  --font-main: "Inter", sans-serif;
}

/* 3. Componentes (A-Z) */
.about {
}
.button {
}
.card {
}
.navbar {
}
.section {
}

/* 4. Animações */
@keyframes slideIn {
}
@keyframes fadeIn {
}

/* 5. Media queries (mobile first) */
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
```

### Naming Conventions

```css
/* ✅ Bom - kebab-case descritivo */
.navbar-brand {
}
.nav-link-active {
}
.project-card {
}
.skill-icon-large {
}
.button-primary {
}

/* ❌ Ruim - sem padrão */
.nb {
}
.navlink {
}
.project {
} /* muito genérico */
.button {
} /* falta contexto */
.blue_bg {
} /* snake_case não é apropriado */
```

### Propriedades: Ordem Padrão

```css
.element {
  /* Positioning */
  position: relative;
  top: 0;
  left: 0;

  /* Display & Layout */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Box Model */
  width: 100%;
  height: auto;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #000;

  /* Visual */
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  /* Effects */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  opacity: 1;

  /* Transitions */
  transition: all 0.3s ease;
}
```

### Variáveis CSS

```css
:root {
  /* Cores */
  --color-bg-primary: #111;
  --color-bg-secondary: #222;
  --color-text-primary: #e8e8e8;
  --color-text-secondary: #f5f5f5;
  --color-accent: #7c3aed;
  --color-accent-hover: #6d28d9;

  /* Typography */
  --font-serif: "Lora", serif;
  --font-sans: "Inter", sans-serif;
  --font-size-base: 1rem;
  --font-size-large: 1.5rem;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;

  /* Breakpoints */
  --breakpoint-mobile: 480px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
}
```

### Mobile-First Approach

```css
/* Padrão para mobile */
.navbar {
  padding: 1rem;
  flex-direction: column;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .navbar {
    padding: 1.5rem;
    flex-direction: row;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .navbar {
    padding: 2rem;
  }
}
```

### Comentários em CSS

```css
/* Componente principal */
.navbar {
  /* Layout flexível com alinhamento */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Posicionamento fixo no topo */
  position: fixed;
  top: 0;
  z-index: 1000;
}

/* ✅ Explique o "por quê", não o "o quê" */
.nav-link {
  /* Aumentar área de clique para acessibilidade */
  padding: 0.5rem 1rem;
}

/* ❌ Evite comentários óbvios */
.nav-link {
  padding: 0.5rem 1rem; /* Padding de 0.5rem e 1rem */
}
```

## JavaScript Guidelines

### Estrutura de Arquivo

```javascript
// 1. Imports/Requires (se houver)
import { helper } from "./utils/helpers.js";

// 2. Constantes
const MAX_SLIDES = 3;
const AUTO_PLAY_INTERVAL = 9000;

// 3. Seletores do DOM
const slides = document.querySelector(".slides");
const buttons = document.querySelectorAll(".button");

// 4. Variáveis de estado
let currentIndex = 0;
let isAnimating = false;

// 5. Funções puras/utilitárias
function calculateIndex(current, total, direction) {
  return (current + direction + total) % total;
}

// 6. Funções de manipulação do DOM
function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 7. Event listeners
buttons.forEach((button) => {
  button.addEventListener("click", updateSlide);
});

// 8. Inicialização
init();
```

### Naming Conventions

```javascript
// ✅ Bom
const maxSlides = 5; // constante em camelCase
let currentIndex = 0; // variável em camelCase
function handleClick() {} // função que manipula eventos
function calculateTotal() {} // função que calcula
const isActive = true; // boolean com prefixo is/has
const getDOMElement = () => {}; // função que retorna algo

// ❌ Ruim
const MAX_SLIDES = 5; // constante (use const, não necessita caps)
let current_index = 0; // snake_case
function click() {} // nome genérico
function total() {} // verbo faltando
const active = true; // sem clareza se é boolean
const getElementDOM() {} // ordem estranha
```

### Escopo e Const

```javascript
// ✅ Prefera const por padrão
const name = "Miguel";
const age = 24;

// Use let quando necessário reatribuir
let index = 0;
index += 1;

// ❌ Evite var
var message = "Olá"; // Evite! Use const ou let
```

### Funções

```javascript
// ✅ Bom - função pura e nomeada descritivamente
function formatDate(date) {
  return date.toLocaleDateString("pt-BR");
}

// ✅ Arrow functions para callbacks
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);

// ❌ Funções anônimas em múltiplas linhas
button.addEventListener("click", function () {
  if (isOpen) {
    menu.classList.remove("active");
    isOpen = false;
  }
});

// ✅ Melhor
function toggleMenu() {
  menu.classList.toggle("active");
  isOpen = !isOpen;
}
button.addEventListener("click", toggleMenu);
```

### Comentários em JavaScript

```javascript
// ✅ Explique complexidade e "por quê"
function validateEmail(email) {
  // Regex baseado em RFC 5322 simplificado
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// ✅ Explique lógica não óbvia
const index = (currentIndex + 1) % totalItems; // Volta ao primeiro quando chega ao final

// ❌ Evite comentários óbvios
let count = 0; // Inicializa count como zero
count++; // Incrementa count
```

### Tratamento de Erros

```javascript
// ✅ Sempre trate erros potenciais
function fetchData(url) {
  try {
    const response = fetch(url);
    return response.json();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null;
  }
}

// ✅ Valide dados antes de usar
function updateProfile(data) {
  if (!data || !data.name) {
    throw new Error("Nome é obrigatório");
  }
  // Continua...
}
```

### Event Listeners

```javascript
// ✅ Nomeie handlers descritivamente
function handleMenuToggle() {}
function handleFormSubmit(event) {}
function handleWindowResize() {}

// ✅ Use removeEventListener quando necessário (cleanup)
function addListeners() {
  window.addEventListener("resize", handleResize);
}

function removeListeners() {
  window.removeEventListener("resize", handleResize);
}

// Limpe listeners quando componente é removido
component.addEventListener("DOMNodeRemoved", removeListeners);
```

## Responsividade

### Breakpoints Padrão

```css
/* Mobile: 320px - 479px */
/* Sem media query necessária - é o padrão */

/* Tablet: 480px - 767px */
@media (min-width: 480px) {
}

/* Tablet grande: 768px - 1023px */
@media (min-width: 768px) {
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
}

/* Desktop grande: 1440px+ */
@media (min-width: 1440px) {
}
```

### Unidades

```css
/* ✅ Use rem/em para escalabilidade */
.button {
  font-size: 1rem; /* Relativo ao root */
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
}

/* ✅ Use px apenas para bordas/shadows */
.card {
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ❌ Evite unidades fixas para fontes */
.text {
  font-size: 16px; /* Difícil de escalar */
}
```

## Performance

### CSS

```css
/* ✅ Use classes, não IDs para estilos */
.header {
}

/* ❌ Evite IDs (muito específicos) */
#header {
}

/* ✅ Minimize seletores aninhados */
.navbar .nav-link {
}

/* ❌ Evite muita aninhação */
.navbar > ul > li > a > span {
}

/* ✅ Use transition para animações suaves */
.button {
  transition: all 0.3s ease;
}

/* ❌ Evite animações com JS puro (use CSS) */
// setInterval(() => { element.style.left = ... }, 16);
```

### JavaScript

```javascript
// ✅ Cache seletores do DOM
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});

/* ❌ Evite buscar o DOM repetidamente */
for (let i = 0; i < 100; i++) {
  document.querySelector(".element").style.color = "red";
}

/* ✅ Event delegation para múltiplos elementos */
document.addEventListener("click", (e) => {
  if (e.target.matches(".button")) {
    handleButtonClick(e);
  }
});
```

## Acessibilidade

```html
<!-- Sempre inclua labels em inputs -->
<label for="name">Nome:</label>
<input id="name" type="text" />

<!-- Use aria-label para ícones -->
<button aria-label="Fechar menu">
  <i class="icon-close"></i>
</button>

<!-- Contraste adequado (WCAG AAA: 7:1) -->
<p style="color: #e8e8e8; background: #111;">Contraste de 16:1 ✅</p>
```

## Commits e Mensagens

### Formato

```bash
# Conventional Commits
git commit -m "feat: adicionar nova seção de certificados"
git commit -m "fix: corrigir menu em dispositivos mobile"
git commit -m "docs: atualizar guia de contribuição"
git commit -m "style: formatar código CSS"
git commit -m "refactor: simplificar lógica do carrossel"

# Tipos comuns:
# feat: nova funcionalidade
# fix: correção de bug
# docs: mudanças na documentação
# style: formatação (sem mudanças lógicas)
# refactor: reestruturação sem mudanças funcionais
# perf: melhoria de performance
# test: adição/atualização de testes
```

---

**Última atualização**: Dezembro 2025
