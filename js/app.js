const featuredTours = [
  {
    dest: "Japan",
    title: "Explorer Japan",
    image: "../static/images/featured/japan.jpg",
    date: "09/10/2015",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 10,
    price: 10000,
    category: "asia",
  },
  {
    dest: "Germany",
    title: "Wild Germany",
    image: "../static/images/featured/germany.jpg",
    date: "09/10/2015",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 7,
    price: 7000,
    category: "europe",
  },
  {
    dest: "Caribbean",
    title: "Caribbean Beach",
    image: "../static/images/featured/caribbean.jpg",
    date: "09/10/2015",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 15,
    price: 12000,
    category: "north america",
  },
  {
    dest: "France",
    title: "Sexy France",
    image: "../static/images/featured/france.jpg",
    date: "09/10/2015",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 7,
    price: 7000,
    category: "europe",
  },
  {
    dest: "Thailand",
    title: "Tropical Thailand",
    image: "../static/images/featured/thailand.jpg",
    date: "09/10/2015",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 10,
    price: 10000,
    category: "asia",
  },
  {
    dest: "Spain",
    title: "Love Spain",
    image: "../static/images/featured/spain.jpg",
    date: "09/10/2015",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 5,
    price: 6500,
    category: "europe",
  },
];

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

  navMenu.style.height = outerMenuHeight === 0 ? `${menuHeight + 5}px` : "0";

  for (child of this.children) {
    child.classList.toggle("show-menu");
  }
});
