/* ========================================
   MAIN SCRIPT - Inicialização da Aplicação
   ======================================== */

import { Carousel } from "./modules/carousel.js";
import { Animations } from "./modules/animations.js";
import { Navigation } from "./modules/navigation.js";

/**
 * Inicializa todos os módulos da aplicação
 */
function initApp() {
  console.log("🚀 Iniciando Portfólio...");

  // Inicializa navegação
  Navigation.init();
  console.log("✅ Navegação carregada");

  // Inicializa carrossel
  Carousel.init();
  console.log("✅ Carrossel carregado");

  // Inicializa animações
  Animations.init();
  console.log("✅ Animações carregadas");

  console.log("🎉 Portfólio pronto!");
}

// Aguarda o DOM estar pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Exporta módulos para uso global (opcional)
window.Portfolio = {
  Carousel,
  Animations,
  Navigation,
};
