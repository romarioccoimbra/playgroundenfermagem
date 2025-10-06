// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Playground da Enfermagem iniciado.");

  // Hover visual para cards (mantive do exemplo anterior)
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => card.classList.add("hover"));
    card.addEventListener("mouseleave", () => card.classList.remove("hover"));
  });

  // Toggle para mostrar/ocultar respostas das atividades
  const toggleBtn = document.getElementById("toggleAnswers");
  const answers = document.getElementById("answers");

  if (toggleBtn && answers) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = answers.hasAttribute("hidden");
      if (isHidden) {
        answers.removeAttribute("hidden");
        toggleBtn.setAttribute("aria-expanded", "true");
      } else {
        answers.setAttribute("hidden", "");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
      // rolagem suave até o conteúdo quando abrir (acessibilidade)
      if (!isHidden) {
        toggleBtn.focus();
      } else {
        answers.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
});
