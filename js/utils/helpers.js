/* ========================================
   UTILITIES - Funções Auxiliares
   ======================================== */

/**
 * Seleciona um elemento do DOM
 * @param {string} selector - Seletor CSS
 * @returns {Element} Elemento do DOM
 */
export const select = (selector) => {
  return document.querySelector(selector);
};

/**
 * Seleciona múltiplos elementos do DOM
 * @param {string} selector - Seletor CSS
 * @returns {NodeList} Lista de elementos
 */
export const selectAll = (selector) => {
  return document.querySelectorAll(selector);
};

/**
 * Adiciona classe a um elemento
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 */
export const addClass = (element, className) => {
  element.classList.add(className);
};

/**
 * Remove classe de um elemento
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 */
export const removeClass = (element, className) => {
  element.classList.remove(className);
};

/**
 * Alterna classe de um elemento
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 */
export const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

/**
 * Verifica se um elemento tem uma classe
 * @param {Element} element - Elemento do DOM
 * @param {string} className - Nome da classe
 * @returns {boolean} true se tem a classe
 */
export const hasClass = (element, className) => {
  return element.classList.contains(className);
};

/**
 * Adiciona event listener
 * @param {Element} element - Elemento do DOM
 * @param {string} event - Nome do evento
 * @param {Function} callback - Função de callback
 */
export const on = (element, event, callback) => {
  element.addEventListener(event, callback);
};

/**
 * Remove event listener
 * @param {Element} element - Elemento do DOM
 * @param {string} event - Nome do evento
 * @param {Function} callback - Função de callback
 */
export const off = (element, event, callback) => {
  element.removeEventListener(event, callback);
};

/**
 * Delay com Promise
 * @param {number} ms - Milissegundos
 * @returns {Promise} Promise resolvida após delay
 */
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Log com prefixo
 * @param {string} message - Mensagem
 * @param {string} type - Tipo de log (info, warn, error)
 */
export const log = (message, type = "info") => {
  console[type](`[Portfolio] ${message}`);
};

/**
 * Valida formulário
 * @param {HTMLFormElement} form - Formulário
 * @returns {boolean} true se válido
 */
export const validateForm = (form) => {
  return form.checkValidity();
};

/**
 * Detecta se é mobile
 * @returns {boolean} true se é mobile
 */
export const isMobile = () => {
  return window.innerWidth < 768;
};

/**
 * Detecta se é tablet
 * @returns {boolean} true se é tablet
 */
export const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Detecta se é desktop
 * @returns {boolean} true se é desktop
 */
export const isDesktop = () => {
  return window.innerWidth >= 1024;
};
