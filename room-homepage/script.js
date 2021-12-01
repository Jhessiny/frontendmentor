const images = document.querySelectorAll(".slide__image");
const prevBtn = document.querySelector(".slide__prev");
const nextBtn = document.querySelector(".slide__next");

let currentSlide = 0;

function nextSlide() {
  images[currentSlide].classList.remove("slide__image--active");
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add("slide__image--active");
}

function prevSlide() {
  images[currentSlide].classList.remove("slide__image--active");
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  images[currentSlide].classList.add("slide__image--active");
}

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)
