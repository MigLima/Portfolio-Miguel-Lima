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
    this.state.btnProximo.addEventListener("click", () => this.next());
    this.state.btnAnterior.addEventListener("click", () => this.prev());
  },
};
