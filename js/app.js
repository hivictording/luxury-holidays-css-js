const featuredTours = [
  {
    dest: "Japan",
    title: "Explore Japan",
    image: "./static/images/featured/japan.jpg",
    date: "07/16/2018",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 10,
    price: 10000,
    category: "asia",
  },
  {
    dest: "Germany",
    title: "Wild Germany",
    image: "./static/images/featured/germany.jpg",
    date: "06/22/2013",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 7,
    price: 7000,
    category: "europe",
  },
  {
    dest: "Canada",
    title: "Beautiful Canada",
    image: "./static/images/featured/canada.jpg",
    date: "03/29/2016",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 16,
    price: 6000,
    category: "north-america",
  },
  {
    dest: "Caribbean",
    title: "Caribbean Holidays",
    image: "./static/images/featured/caribbean.jpg",
    date: "05/10/2020",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 15,
    price: 12000,
    category: "caribbean",
  },
  {
    dest: "France",
    title: "Sexy France",
    image: "./static/images/featured/france.jpg",
    date: "10/09/2016",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 7,
    price: 7000,
    category: "europe",
  },
  {
    dest: "USA",
    title: "Driving USA",
    image: "./static/images/featured/usa.jpg",
    date: "05/18/2020",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 15,
    price: 12000,
    category: "north-america",
  },
  {
    dest: "Brazil",
    title: "You have to feel it ",
    image: "./static/images/featured/brazil.jpg",
    date: "12/18/2012",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 18,
    price: 3500,
    category: "south-america",
  },
  {
    dest: "Thailand",
    title: "Tropical Thailand",
    image: "./static/images/featured/thailand.jpg",
    date: "09/10/2015",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 10,
    price: 10000,
    category: "asia",
  },
  {
    dest: "Switerland",
    title: "Jump into Switzerland",
    image: "./static/images/featured/switzerland.jpg",
    date: "03/25/2018",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 8,
    price: 4500,
    category: "europe",
  },
  {
    dest: "Korea",
    title: "Unforgettable Korea",
    image: "./static/images/featured/korea.jpg",
    date: "05/28/2014",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dignissimos perferendis vero laudantium sunt voluptas eos possimus! Sint, fugiat voluptatem?",
    length: 10,
    price: 10000,
    category: "asia",
  },
  {
    dest: "Spain",
    title: "Love Spain",
    image: "./static/images/featured/spain.jpg",
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
const menus = document.querySelector(".menus");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const featuredCenter = document.querySelector(".featured-center");
const featuredTourCategory = document.querySelector(".featured-tour-category");

const navHeight = nav.getBoundingClientRect().height;
let currentFeaturedTour = 0;

window.addEventListener("DOMContentLoaded", function () {
  // adjust the hero height based on the nav height after page loaded
  hero.style.height = `calc(100vh - ${navHeight}px)`;

  // loading featured tour category buttons
  let featuredTourCategoryName = new Set(
    featuredTours.map((tour) => tour.category)
  )
    .add("all")
    .add("random")
    .add("random-one");

  // Array.from: the second argument is a map() function
  featuredTourCategory.innerHTML = Array.from(
    featuredTourCategoryName,
    (category) =>
      `<li class="tours" data-category=${category}><a href="#featured" class="btn-primary">${category
        .split("-")
        .join(" ")}</a></li>`
  ).join("");

  // loading featured-center content from backend
  featuredCenter.innerHTML = displayTours(featuredTours.slice(0, 1));

  // selecting featured tour category buttons
  const featuredTourCategoryBtns = document.querySelectorAll(".tours");

  // Filter featured tours
  featuredTourCategoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      switch (this.dataset.category) {
        case "all":
          featuredCenter.innerHTML = displayTours(featuredTours);
          break;
        case "random":
          featuredCenter.innerHTML = displayTours(
            getRandomItems(featuredTours, 5)
          );
          break;
        case "random-one":
          const randomTour = getRandomItems(featuredTours, 1);
          featuredCenter.innerHTML = displayTours(randomTour);
          currentFeaturedTour = featuredTours.indexOf(randomTour[0]);
          break;
        default:
          featuredCenter.innerHTML = displayTours(
            featuredTours.filter(
              (tour) => tour.category === this.dataset.category
            )
          );
      }
    });
  });
});

// Featured tour left and right arrows
const featuredTourScroll = document.querySelector(".featured-tour-scroll");

for (let item of featuredTourScroll.children) {
  item.addEventListener("click", function (event) {
    if (event.currentTarget.classList.contains("featured-tour-next")) {
      currentFeaturedTour++;
    } else {
      currentFeaturedTour--;
    }

    if (currentFeaturedTour < 0) {
      currentFeaturedTour = featuredTours.length - 1;
    } else if (currentFeaturedTour > featuredTours.length - 1) {
      currentFeaturedTour = 0;
    }

    featuredCenter.innerHTML = displayTours(
      featuredTours.slice(currentFeaturedTour, currentFeaturedTour + 1)
    );
  });
}

// fixed header when scroll to some point
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
  const menuHeight = menus.getBoundingClientRect().height;
  const outerMenuHeight = navMenu.getBoundingClientRect().height;

  navMenu.style.height = outerMenuHeight === 0 ? `${menuHeight + 5}px` : "0";

  for (child of this.children) {
    child.classList.toggle("show-menu");
  }
});

function getRandomItems(array, number) {
  let newArray = new Array();
  while (newArray.length < number) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    if (!newArray.includes(randomItem)) {
      newArray.push(randomItem);
    }
  }

  return newArray;
}

function displayTours(tours) {
  return tours
    .map(
      (tour) => `
    <div class="featured-tour"> 
      <div class="tour-image"> 
        <img src=${tour.image} alt=${tour.dest} /> 
        <div class="tour-date"> 
          ${tour.date} 
        </div> 
      </div> 
      <div class="tour-center"> 
        <div class="tour-title">${tour.title}</div> 
        <div class="tour-desc"> 
          ${tour.desc} 
            </div> 
        <div class="tour-details"> 
          <div class="tour-dest"> 
            <span class="tour-dest-icon"> 
              <f class="fas fa-plane"></f> 
            </span> 
                ${tour.dest} 
              </div> 
          <div class="tour-length"> 
            <span class="tour-duration">${tour.length}</span> 
                &nbsp;days 
              </div> 
          <div class="tour-price"> 
            From&nbsp; 
                <span class="tour-price-amount">$${tour.price}</span> 
          </div> 
        </div> 
      </div> 
    </div >`
    )
    .join("");
}
