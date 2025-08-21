// Счетчик корзины
const cartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart__count");
let cartItems = 0;

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = cartItems;
  });
});

// const burger = document.querySelector(".burger");
// const nav = document.querySelector(".nav");
// const overlayMenu = document.querySelector(".overlay-menu");
// const links = document.querySelectorAll(".nav__list a");

// Функция открытия/закрытия меню
// function toggleMenu() {
//   burger.classList.toggle("active");
//   nav.classList.toggle("active");
//   overlayMenu.classList.toggle("active");
// }

// Клик по бургеру
//burger.addEventListener("click", toggleMenu);

// Клик по оверлею — закрыть меню
//overlayMenu.addEventListener("click", toggleMenu);

// Клик по ссылкам — тоже закрыть меню
//links.forEach((link) => link.addEventListener("click", toggleMenu));

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-burger");
// создаём overlay
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

function toggleMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// функция для открытия/закрытия меню

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu); // закрываем при клике на фон

//const burger = document.querySelector('.burger');

// burger.addEventListener('click', () => {
//   burger.classList.toggle('active');
//   menu.classList.toggle('active');
// });

// Скрытие шапки при скролле
const header = document.querySelector(".site-header");
let lastScroll = 0;
const delta = 10;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    header.style.top = "-120px";
  } else {
    header.style.top = "0";
  }
  lastScroll = currentScroll;
});

document.querySelectorAll(".productInfo").forEach((product) => {
  const infoBtn = product.querySelector(".infoBtn");
  const productDialog = product.querySelector(".productDialog");
  const closeBtn = product.querySelector(".closeBtn");
  const overlay = product.querySelector(".overlay");

  infoBtn.addEventListener("click", () => {
    productDialog.showModal();
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    productDialog.close();
    overlay.classList.remove("active");
  });
});
