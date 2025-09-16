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

const btns = document.querySelectorAll(".portfolio-btn");
btns.forEach((btn) => {
  console.log(btn.textContent.toLowerCase());
  if (btn.textContent.toLowerCase().trim() === "all") {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});

const sortList = (category) => {
  const items = document.querySelectorAll(".portfolio-products li");
  const btns = document.querySelectorAll(".portfolio-btn");

  btns.forEach((btn) => {
    if (
      btn.textContent.toLowerCase().trim() === category &&
      !btn.classList.contains("active")
    ) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  items.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
};
