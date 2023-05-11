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

// let formAuth = document.querySelector(".form-auth");
// console.log(formAuth);

// let moreDetails = document.querySelectorAll(".price-btn");
// console.log(moreDetails);

// let btnClose = document.querySelector(".btn-close");
// console.log(btnClose);

// moreDetails.forEach((item) => {
//   item.addEventListener("click", function () {
//     if ((formAuth.style.display = "none")) {
//       formAuth.style.display = "block";
//     }
//   });
// });

// function btnCloseBtn() {
//   if ((formAuth.style.display = "block")) {
//     formAuth.style.display = "none";
//   }
// }
// document.querySelector(".btn-close").addEventListener("click", btnCloseBtn);

let pictureLike = document.querySelectorAll(".picture2");
console.log(pictureLike);

pictureLike.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

let modal = document.querySelector(".form-auth");
console.log(modal);
let moreDetailsBtns = document.querySelectorAll(".price-btn");
console.log(moreDetailsBtns);

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

let btnClose = document.querySelector(".btn-close");
console.log(btnClose);

function closenModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

btnClose.addEventListener("click", closenModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closenModal();
  }
});

$(".slider").slick({
  dots: true,
});
