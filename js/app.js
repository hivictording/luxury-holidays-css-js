const navMenuToggler = document.querySelector(".nav-menu-toggler");
const navMenu = document.querySelector(".nav-menu");
const Menus = document.querySelector(".menus");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

// adjust the hero height based on the nav height
window.addEventListener("DOMContentLoaded", function () {
  const navHeight = nav.getBoundingClientRect().height;
  hero.style.height = `calc(100vh - ${navHeight}px)`;
});

// adjust the menu height dynamically
navMenuToggler.addEventListener("click", function () {
  const menuHeight = Menus.getBoundingClientRect().height;
  const outerMenuHeight = navMenu.getBoundingClientRect().height;

  navMenu.style.height = outerMenuHeight === 0 ? `${menuHeight}px` : "0";
});
