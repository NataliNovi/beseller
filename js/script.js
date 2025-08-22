//

// ---------- Счетчик корзины ----------
// const cartButtons = document.querySelectorAll(".add-to-cart");
// const cartCount = document.querySelector(".cart__count");
// let cartItems = 0;

// cartButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     cartItems += 1;
//     cartCount.textContent = cartItems;
//   });
// });

const cartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart__count");
let cartItems = 0;

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = cartItems;

    // Сохраняем старый текст кнопки
    const originalText = button.textContent;

    // Меняем текст на "Товар добавлен в корзину"
    button.textContent = "Товар в корзине";

    //Через 2 секунды возвращаем исходный текст
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
});

// ---------- Бургер-меню ----------
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-burger");
const overlayMenu = document.createElement("div");
overlayMenu.classList.add("menu-overlay");
document.body.appendChild(overlayMenu);

function toggleMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
}

burger.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);

// ---------- Скрытие шапки при скролле ----------
const header = document.querySelector(".site-header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  header.style.top = currentScroll > lastScroll ? "-120px" : "0";
  lastScroll = currentScroll;
});

// ---------- Информация о товарах ----------
document.querySelectorAll(".productInfo").forEach((product) => {
  const infoBtn = product.querySelector(".infoBtn");
  const productDialog = product.querySelector(".productDialog");
  const closeBtn = product.querySelector(".closeBtn");
  const overlay = product.querySelector(".overlay");

  if (!infoBtn || !productDialog || !closeBtn || !overlay) {
    console.warn("Пропущен товар: отсутствует один из элементов", product);
    return;
  }

  infoBtn.addEventListener("click", () => {
    productDialog.showModal();
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    productDialog.close();
    overlay.classList.remove("active");
  });
});

// ---------- Рейтинг ----------
document.querySelectorAll(".rating--interactive").forEach((ratingBlock) => {
  const stars = ratingBlock.querySelectorAll(".star");
  const avgEl = ratingBlock.querySelector(".rating__avg");
  const votesEl = ratingBlock.querySelector(".rating__votes");

  if (!stars.length || !avgEl || !votesEl) return;

  let totalVotes = parseInt(ratingBlock.dataset.votes, 10) || 0;
  let avgRating = parseFloat(ratingBlock.dataset.rating) || 0;
  let userRated = false;
  let userRating = 0;

  function highlight(n) {
    stars.forEach((s, i) => s.classList.toggle("active", i < n));
  }

  highlight(Math.round(avgRating));

  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      if (!userRated) highlight(+star.dataset.value);
    });
    star.addEventListener("mouseleave", () => {
      if (!userRated) highlight(Math.round(avgRating));
    });
    star.addEventListener("click", (e) => {
      e.preventDefault();
      if (userRated) return;
      userRating = +star.dataset.value;
      userRated = true;
      avgRating =
        totalVotes === 0
          ? userRating
          : (avgRating * totalVotes + userRating) / (totalVotes + 1);
      totalVotes += 1;
      avgEl.textContent = avgRating.toFixed(1);
      votesEl.textContent = totalVotes;
      highlight(userRating);
      stars.forEach((s) => {
        s.disabled = true;
        s.style.cursor = "default";
      });
    });
  });
});
