"use strict";

const btnDash = document.querySelectorAll(".main-nav__link");
const box = document.querySelector(".bottom-section");

let count = 0;

console.log(btnDash[0].textContent);

for (let i = 0; i < btnDash.length; i++) {
  if (btnDash[i].textContent === "Home") {
    btnDash[i].addEventListener("click", function () {
      count++;
      console.log(count);
      box.style.width = "50%";
    });
  } else {
    btnDash[i].addEventListener("click", function () {
      count--;
      box.style.width = "99.2%";
    });
  }
}
