const nav = document.querySelector("nav");
const menuSign = document.querySelector(".menu-sign");
const menu = document.querySelector(".menu");

menuSign.addEventListener("click", () => {

  nav.classList.toggle("position-sticky");
  menuSign.classList.toggle("menu-sign-close");
  menu.classList.toggle("menu-open");
});
