const orderServiceBtn = document.querySelector(".hero-button");
const backdrop = document.querySelector(".backdrop");
const body = document.body;
const mobileMenu = document.querySelector(".mobile-menu");
const burgerBtn = document.querySelector(".burger-btn");

const closeModalBtn = document.querySelectorAll(".close-modal-btn");
const closeOrderBtn = closeModalBtn[0];
const closeMobileMenuBtn = closeModalBtn[1];

orderServiceBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
  body.classList.add("is-modal-open");
});

closeOrderBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
  body.classList.remove("is-modal-open");
});

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-mobile-menu-open");
  body.classList.add("is-modal-open");
});

closeMobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-mobile-menu-open");
  body.classList.remove("is-modal-open");
});
