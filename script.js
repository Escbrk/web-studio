const orderServiceBtn = document.querySelector(".hero-button");
const backdrop = document.querySelector(".backdrop");
const body = document.body;
const mobileMenu = document.querySelector(".mobile-menu");
const burgerBtn = document.querySelector(".burger-btn");

const closeModalBtn = document.querySelectorAll(".close-modal-btn");

if (orderServiceBtn) {
  orderServiceBtn.addEventListener("click", () => {
    backdrop.classList.add("is-open");
    body.classList.add("is-modal-open");
  });

  closeModalBtn[0].addEventListener("click", () => {
    backdrop.classList.remove("is-open");
    body.classList.remove("is-modal-open");
  });
}

if (closeModalBtn[1]) {
  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-mobile-menu-open");
    body.classList.add("is-modal-open");
  });

  closeModalBtn[1].addEventListener("click", () => {
    mobileMenu.classList.remove("is-mobile-menu-open");
    body.classList.remove("is-modal-open");
  });
} else {
  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-mobile-menu-open");
    body.classList.add("is-modal-open");
  });

  closeModalBtn[0].addEventListener("click", () => {
    mobileMenu.classList.remove("is-mobile-menu-open");
    body.classList.remove("is-modal-open");
  });
}
