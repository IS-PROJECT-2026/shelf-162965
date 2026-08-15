/* Genre filtering for the catalogue grid. */

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".book-card");

function applyFilter(genre) {
  cards.forEach((card) => {
    const match = genre === "all" || card.dataset.genre === genre;
    card.hidden = !match;
  });

  buttons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.filter === genre));
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
});