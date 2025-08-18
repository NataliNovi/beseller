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

// Рейтинг товаров
const allStars = document.querySelectorAll(".product__rating .star");
allStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const parent = star.parentNode;
    const stars = parent.querySelectorAll(".star");
    stars.forEach((s, i) => {
      s.classList.toggle("active", i <= index);
    });
  });
});

// Скрытие шапки при скролле
let header = document.querySelector(".site-header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    header.style.top = "-100px";
  } else {
    header.style.top = "0";
  }
  lastScroll = currentScroll;
});

// Модальное окно
const infoBtn = document.querySelector(".info-btn");
const productDialog = document.getElementById("productDialog");

infoBtn.addEventListener;
