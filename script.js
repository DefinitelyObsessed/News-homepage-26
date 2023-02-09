const body = document.querySelector("body");
const menuSign = document.querySelector(".menu-sign");
const menu = document.querySelector(".menu");

menuSign.addEventListener("click", () => {

  body.classList.toggle("scroll-disable");
  menuSign.classList.toggle("menu-sign-close");
  menu.classList.toggle("menu-open");
});
