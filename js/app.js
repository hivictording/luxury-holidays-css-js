const home = document.querySelector(".header");
const navMenuToggler = document.querySelector(".nav-menu-toggler");
const showMenu = document.querySelector(".toggler-container.show-menu");
const hideMenu = document.querySelector(".toggler-container.hide-menu");
const navMenu = document.querySelector(".nav-menu");
const Menus = document.querySelector(".menus");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

const navHeight = nav.getBoundingClientRect().height;

// adjust the hero height based on the nav height after page loaded
window.addEventListener("DOMContentLoaded", function () {
  hero.style.height = `calc(100vh - ${navHeight}px)`;
});

window.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop > navHeight ||
    document.body.scrollTop > navHeight
  ) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

// adjust the menu height dynamically
navMenuToggler.addEventListener("click", function () {
  const menuHeight = Menus.getBoundingClientRect().height;
  const outerMenuHeight = navMenu.getBoundingClientRect().height;

  navMenu.style.height = outerMenuHeight === 0 ? `${menuHeight}px` : "0";

  for (child of this.children) {
    child.classList.toggle("show-menu");
  }
});
