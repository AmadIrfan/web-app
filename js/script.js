// @ts-nocheck
// document.addEventListener("DOMContentLoaded", () => {
// });

let slideIndex = 0;
let nav_menu = document.getElementsByClassName("nav-menu")[0];
let btnMenuShow = document.getElementById("responsive-btn");
const slides = document.getElementsByClassName("slide");

btnMenuShow?.addEventListener("click", () => {
  nav_menu.classList.toggle("show-nav-menu");
});

nav_menu.addEventListener("click", () => {
  nav_menu.classList.toggle("show-nav-menu");
});

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

showSlide(slideIndex);
