const slider = document.getElementById("slider");
const track = document.getElementById("sliderTrack");
const indicator = document.getElementById("indicator");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const slides = document.querySelectorAll(".slider-track img");
const totalSlides = slides.length;

let index = 0;
let interval;

/* Move slide */
function updateSlide() {
  track.style.transform = `translateX(-${index * 100}vw)`;
  indicator.textContent = `${index + 1} / ${totalSlides}`;
}

/* Navigation */
function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlide();
}

/* Auto slide */
function startAutoSlide() {
  interval = setInterval(nextSlide, 1500);
}

function stopAutoSlide() {
  clearInterval(interval);
}

/* Pause on hover */
slider.addEventListener("mouseenter", stopAutoSlide);
slider.addEventListener("mouseleave", startAutoSlide);

/* Button events */
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

/* Touch swipe */
let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;
  if (diff > 50) nextSlide();
  if (diff < -50) prevSlide();
}

/* Init */
updateSlide();
startAutoSlide();
