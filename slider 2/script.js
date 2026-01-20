"use strict";

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let autoSlideInterval;
const autoSlideDuration = 3000; // 3 seconds

function slideNext() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}

function slidePrev() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(slideNext, autoSlideDuration);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

next.addEventListener("click", function () {
  slideNext();
  resetAutoSlide();
});

prev.addEventListener("click", function () {
  slidePrev();
  resetAutoSlide();
});

// Start auto-slide on page load
startAutoSlide();
