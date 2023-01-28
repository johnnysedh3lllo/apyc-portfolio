"use strict";
const progress = document.querySelector(".sidebar__progress-bar");
const bodyHeight = document.querySelector("body").clientHeight;
const dot = document.querySelector(".dot");

const currentProgress = progress.clientHeight;
const progressBarHeight = document.querySelector(
  ".sidebar__progress-bar__wrapper"
).clientHeight;

// console.log(currentProgress);

// window.onscroll = function () {
//   let progressPerc = (window.scrollY / progressBarHeight) * 100;
//   progress.style.height = Math.trunc(progressPerc) + "%";
// };

// Toggle button
const toggle = document.querySelector(".dot");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  dot.classList.toggle("dot--move");
});