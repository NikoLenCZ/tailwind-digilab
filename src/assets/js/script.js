//Slider

const splide = new Splide('.splide', {
  type: 'loop',
  // autoplay: 'true',
  // interval: '3000'
});

splide.mount();

// Menu

let menu = document.querySelector(".navbar-icon");
let navList = document.querySelector(".nav-list")
menu.onclick = function() {
  navList.classList.toggle("show");
};

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach( navLink => {
  navLink.addEventListener("click", () => {
    navList.classList.toggle("show");
  })
})