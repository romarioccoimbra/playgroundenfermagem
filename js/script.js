// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Playground da Enfermagem iniciado.");

  // Pequena animação ao passar o mouse nos cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => card.classList.add("hover"));
    card.addEventListener("mouseleave", () => card.classList.remove("hover"));
  });
});
