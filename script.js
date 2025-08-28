const orderServiceBtn = document.querySelector(".hero-button");
const closeModalBtn = document.querySelector(".close-modal-btn");
const backdrop = document.querySelector(".backdrop");

orderServiceBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

closeModalBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});
