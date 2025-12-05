# 🎯 Guia de Módulos JavaScript

Este documento descreve como usar e estender os módulos JavaScript do portfólio.

## Estrutura de Módulos

O portfólio conta com duas abordagens:

### 1. **Script Tradicional (Atual)**

- **Arquivo**: `js/script.js`
- **Uso**: Compatível com navegadores antigos
- **Vantagem**: Funciona em todos os navegadores
- **Desvantagem**: Menos organizado e difícil de manter

### 2. **Módulos ES (Moderno)**

- **Arquivo**: `js/script-new.js`
- **Uso**: Requer navegadores modernos (ES6+)
- **Vantagem**: Código organizado, modular e escalável
- **Desvantagem**: Não funciona em navegadores muito antigos

## Como Usar Módulos ES

Para usar a versão modularizada, edite `index.html`:

```html
<!-- Comente a linha abaixo -->
<!-- <script src="js/script.js"></script> -->

<!-- Descomente a linha abaixo -->
<script type="module" src="js/script-new.js"></script>
```

## Módulos Disponíveis

### 1. Carousel (Carrossel de Projetos)

```javascript
import { Carousel } from "./modules/carousel.js";

// Inicializar
Carousel.init();

// Usar métodos
Carousel.next(); // Próximo slide
Carousel.prev(); // Slide anterior
Carousel.showSlide(); // Mostra slide atual
```

**Propriedades:**

- `state.index` - Índice do slide atual
- `state.autoPlayInterval` - Intervalo de auto-play (9000ms)

**Métodos:**

- `init()` - Inicializa o carrossel
- `next()` - Avança para próximo slide
- `prev()` - Volta para slide anterior
- `showSlide()` - Renderiza o slide atual
- `startAutoPlay()` - Inicia auto-play

### 2. Animations (Animações)

```javascript
import { Animations } from "./modules/animations.js";

// Inicializar
Animations.init();

// Usar métodos
Animations.typeWriter(); // Inicia animação de typing
```

**Métodos:**

- `init()` - Inicializa todas as animações
- `typeWriter()` - Anima a máquina de escrever

### 3. Navigation (Menu e Navegação)

```javascript
import { Navigation } from "./modules/navigation.js";

// Inicializar
Navigation.init();

// Usar métodos
Navigation.toggleMenu(); // Abre/fecha menu
Navigation.closeMenu(); // Fecha menu
```

**Métodos:**

- `init()` - Inicializa navegação
- `toggleMenu()` - Alterna menu aberto/fechado
- `closeMenu()` - Fecha o menu

### 4. Helpers (Funções Auxiliares)

```javascript
import {
  select,
  selectAll,
  addClass,
  removeClass,
  toggleClass,
  hasClass,
  on,
  off,
  delay,
  log,
  isMobile,
  isTablet,
  isDesktop,
} from "./utils/helpers.js";

// Exemplos de uso
const header = select(".header");
addClass(header, "active");

const buttons = selectAll(".button");
buttons.forEach((btn) => on(btn, "click", () => log("Clicado!")));

if (isMobile()) {
  log("Dispositivo mobile detectado");
}

// Delay
await delay(1000); // Aguarda 1 segundo
```

**Funções:**

- `select(selector)` - Seleciona um elemento
- `selectAll(selector)` - Seleciona múltiplos elementos
- `addClass(element, className)` - Adiciona classe
- `removeClass(element, className)` - Remove classe
- `toggleClass(element, className)` - Alterna classe
- `hasClass(element, className)` - Verifica se tem classe
- `on(element, event, callback)` - Adiciona event listener
- `off(element, event, callback)` - Remove event listener
- `delay(ms)` - Promise que resolve após delay
- `log(message, type)` - Log com prefixo (info, warn, error)
- `validateForm(form)` - Valida formulário
- `isMobile()` - Detecta se é mobile
- `isTablet()` - Detecta se é tablet
- `isDesktop()` - Detecta se é desktop

## Criando Novos Módulos

Para criar um novo módulo, siga este padrão:

```javascript
/* ========================================
   MEU NOVO MÓDULO
   ======================================== */

export const MeuModulo = {
  state: {
    // Estado da aplicação
  },

  /**
   * Inicializa o módulo
   */
  init() {
    this.setupEventListeners();
  },

  /**
   * Configura event listeners
   */
  setupEventListeners() {
    // Adicionar listeners aqui
  },

  /**
   * Método público
   */
  meuMetodo() {
    // Lógica aqui
  },
};
```

Depois importe em `script-new.js`:

```javascript
import { MeuModulo } from "./modules/meu-modulo.js";

function initApp() {
  MeuModulo.init();
}
```

## Estrutura do script-new.js

```javascript
import { Carousel } from "./modules/carousel.js";
import { Animations } from "./modules/animations.js";
import { Navigation } from "./modules/navigation.js";

function initApp() {
  Navigation.init(); // 1. Menu
  Carousel.init(); // 2. Carrossel
  Animations.init(); // 3. Animações
}

// Aguarda DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Exporta globalmente
window.Portfolio = {
  Carousel,
  Animations,
  Navigation,
};
```

## Acessando Módulos Globalmente

Se o DOM estiver em construção (dev), acesse no console:

```javascript
// Dentro do console do navegador
Portfolio.Carousel.next();
Portfolio.Navigation.toggleMenu();
Portfolio.Animations.typeWriter();
```

## Migrando de script.js para script-new.js

### Passo 1: Backup

```bash
git checkout -b feature/es-modules
```

### Passo 2: Atualizar HTML

```html
<!-- Comente -->
<!-- <script src="js/script.js"></script> -->

<!-- Descomente -->
<script type="module" src="js/script-new.js"></script>
```

### Passo 3: Testar

- Abra no navegador
- Verifique console (F12)
- Teste carrossel, menu, animações

### Passo 4: Commit

```bash
git add .
git commit -m "refactor: migrar para ES modules"
git push origin feature/es-modules
```

## Debugging

### Ver logs

Abra o console (F12) para ver logs com `[Portfolio]`:

```
[Portfolio] Iniciando Portfólio...
[Portfolio] ✅ Navegação carregada
[Portfolio] ✅ Carrossel carregado
[Portfolio] ✅ Animações carregadas
[Portfolio] 🎉 Portfólio pronto!
```

### Verificar módulos

No console:

```javascript
console.log(window.Portfolio);
// { Carousel: {...}, Animations: {...}, Navigation: {...} }
```

### Testar manualmente

```javascript
// No console
Portfolio.Carousel.next();
Portfolio.Navigation.toggleMenu();
```

## Performance

### Vantagens dos Módulos

- ✅ Code splitting: carrega apenas o necessário
- ✅ Tree shaking: remove código não usado
- ✅ Melhor cache: arquivos menores
- ✅ Namespace: evita conflitos globais

### Otimizações

Para produção, minifique com bundler:

```bash
npm install -D vite
npx vite build
```

## Compatibilidade de Navegadores

### ES Modules (script-new.js)

- ✅ Chrome 60+
- ✅ Firefox 67+
- ✅ Safari 10.1+
- ✅ Edge 79+
- ❌ IE 11

### Script Tradicional (script.js)

- ✅ Todos os navegadores

## Próximos Passos

1. **Testar ambas versões** em diferentes navegadores
2. **Decidir qual usar** baseado no seu público
3. **Manter ambas** por compatibilidade ou **remover a antiga** se não precisar
4. **Adicionar mais módulos** conforme necessário

---

**Última atualização**: Dezembro 2025
**Versão**: 1.1.0 (Modularização)
