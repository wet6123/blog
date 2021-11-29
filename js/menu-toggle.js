const menuToggle = document.querySelector(".navbar__menuToggle");
const menu = document.querySelector(".navbar__menu");
const icon = document.querySelector(".navbar__icon");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});
