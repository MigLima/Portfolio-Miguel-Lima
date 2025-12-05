/* ========================================
   ANIMATIONS MODULE - Animações
   ======================================== */

export const Animations = {
  /**
   * Animação de typing (máquina de escrever)
   */
  typeWriter() {
    const textElement = document.getElementById("text");
    const textToType = "Front-End";
    let typingIndex = 0;
    let deleting = false;

    const type = () => {
      if (!deleting && typingIndex === 0) {
        textElement.textContent = "";
      }

      if (!deleting && typingIndex < textToType.length) {
        textElement.textContent += textToType.charAt(typingIndex);
        typingIndex++;
        setTimeout(type, 150);
      } else if (deleting && typingIndex > 0) {
        textElement.textContent = textToType.substring(0, typingIndex - 1);
        typingIndex--;
        setTimeout(type, 100);
      } else {
        deleting = !deleting;
        setTimeout(type, 500);
      }
    };

    type();
  },

  /**
   * Inicializa todas as animações
   */
  init() {
    this.typeWriter();
  },
};
