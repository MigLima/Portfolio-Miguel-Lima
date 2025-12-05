/* ========================================
   NAVIGATION MODULE - Menu e Navegação
   ======================================== */

export const Navigation = {
  state: {
    hamburger: document.querySelector(".hamburger"),
    navLinks: document.querySelector(".nav-links"),
    links: document.querySelectorAll(".nav-links a"),
    logoLink: document.getElementById("logoLink"),
  },

  /**
   * Inicializa a navegação com event listeners
   */
  init() {
    this.setupHamburger();
    this.setupNavLinks();
    this.setupLogoScroll();
  },

  /**
   * Configura o menu hamburger
   */
  setupHamburger() {
    this.state.hamburger.addEventListener("click", () => {
      this.toggleMenu();
    });
  },

  /**
   * Alterna o menu hamburger aberto/fechado
   */
  toggleMenu() {
    this.state.navLinks.classList.toggle("active");
    this.state.hamburger.classList.toggle("active");
  },

  /**
   * Fecha o menu ao clicar em um link
   */
  closeMenu() {
    this.state.navLinks.classList.remove("active");
    this.state.hamburger.classList.remove("active");
  },

  /**
   * Configura os links de navegação
   */
  setupNavLinks() {
    this.state.links.forEach((link) => {
      link.addEventListener("click", () => {
        this.closeMenu();
      });
    });
  },

  /**
   * Configura o scroll suave para o topo ao clicar no logo
   */
  setupLogoScroll() {
    this.state.logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.closeMenu();
    });
  },
};
