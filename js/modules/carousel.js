/* ========================================
   CAROUSEL MODULE - Funcionalidade do Carrossel
   ======================================== */

export const Carousel = {
  state: {
    slides: document.querySelector(".slides"),
    projetos: document.querySelectorAll(".projeto"),
    btnAnterior: document.querySelector(".btn-anterior"),
    btnProximo: document.querySelector(".btn-proximo"),
    index: 0,
    intervalo: null,
    autoPlayInterval: 9000,
    touchStartX: 0,
    touchEndX: 0,
  },

  /**
   * Inicializa o carrossel com event listeners
   */
  init() {
    this.setupEventListeners();
    this.startAutoPlay();
  },

  /**
   * Exibe o slide no índice atual
   */
  showSlide() {
    const offset = `${this.state.index * 100}%`;
    this.state.slides.style.transform = `translateX(-${offset})`;
  },

  /**
   * Inicia o auto-play do carrossel
   */
  startAutoPlay() {
    if (this.state.intervalo) clearInterval(this.state.intervalo);
    this.state.intervalo = setInterval(() => {
      this.next();
    }, this.state.autoPlayInterval);
  },

  /**
   * Avança para o próximo slide
   */
  next() {
    this.state.index = (this.state.index + 1) % this.state.projetos.length;
    this.showSlide();
    this.startAutoPlay();
  },

  /**
   * Volta para o slide anterior
   */
  prev() {
    this.state.index =
      (this.state.index - 1 + this.state.projetos.length) %
      this.state.projetos.length;
    this.showSlide();
    this.startAutoPlay();
  },

  /**
   * Configura os event listeners
   */
  setupEventListeners() {
    // Botões de navegação (desktop)
    if (this.state.btnProximo) {
      this.state.btnProximo.addEventListener("click", () => this.next());
    }
    if (this.state.btnAnterior) {
      this.state.btnAnterior.addEventListener("click", () => this.prev());
    }

    // Touch events para swipe (mobile)
    this.state.slides.addEventListener("touchstart", (e) => {
      this.state.touchStartX = e.changedTouches[0].screenX;
    });

    this.state.slides.addEventListener("touchend", (e) => {
      this.state.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });
  },

  /**
   * Detecta a direção do swipe
   */
  handleSwipe() {
    const swipeThreshold = 50; // Mínimo de pixels para considerar um swipe
    const diff = this.state.touchStartX - this.state.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe para esquerda - próximo slide
        this.next();
      } else {
        // Swipe para direita - slide anterior
        this.prev();
      }
    }
  },
};
