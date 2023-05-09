<<<<<<< HEAD
"use strict";

let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".price-btn1");
console.log(addToCartBtns);

addToCartBtns.forEach((item) => {
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

let pictureOne = document.getElementsById("#picture-one");
console.log(pictureOne);

function changeUrl() {
  if ((pictureOne.style.background = url("images/heart.png"))) {
    pictureOne.style.background = url("images/heart-white.png");
  } else {
    pictureOne.style.background = url("images/heart.png");
  }
}
document.querySelector("#picture-one").addEventListener("click", changeUrl);

let formAuth = document.querySelector(".form-auth");
console.log(formAuth);

let moreDetails = document.querySelectorAll(".price-btn");
console.log(moreDetails);

let btnClose = document.querySelector(".btn-close");
console.log(btnClose);

moreDetails.forEach((item) => {
  item.addEventListener("click", function () {
    if ((formAuth.style.display = "none")) {
      formAuth.style.display = "block";
    }
  });
});

function btnCloseBtn() {
  if ((formAuth.style.display = "block")) {
    formAuth.style.display = "none";
  }
}
document.querySelector(".btn-close").addEventListener("click", btnCloseBtn);
=======

>>>>>>> 47a35a9f373bb6b341bce3eee5ff6fab98310569
