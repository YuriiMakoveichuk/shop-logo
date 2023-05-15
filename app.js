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
// console.log(btnClose);

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

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn: document.querySelectorAll(".increment-button"),
    decrementBtn: document.querySelectorAll(".decrement-button"),
    inputField: document.querySelectorAll(".product-quantity input"),
  };

  // this.toggleButtonState = function () {
  //   let count = +this.domRefs.inputField.value;

  //   this.domRefs.decrementBtn.disabled = count <= 1;
  //   this.domRefs.incrementBtn.disabled = count >= 10;
  // };
  // this.toggleButtonState();

  this.increment = function () {
    if (this.domRefs.inputField.value <= 1) {
      this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
      // this.toggleButtonState();
    }
  };
  this.decrement = function () {
    if (this.domRefs.inputField.value >= 10) {
      this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
      // this.toggleButtonState();
    }
  };
  this.domRefs.incrementBtn.forEach((total) => {
    total.addEventListener("click", this.increment.bind(this));
  });

  this.domRefs.decrementBtn.forEach((total) => {
    total.addEventListener("click", this.decrement.bind(this));
  });

  // this.domRefs.incrementBtn.addEventListener(
  //   "click",
  //   this.increment.bind(this)
  // );
  // this.domRefs.decrementBtn.addEventListener(
  //   "click",
  //   this.decrement.bind(this)
  // );
}

let counter = new Counter(
  document.querySelectorAll(".increment-button")[0],
  document.querySelectorAll(".decrement-button")[0],
  document.querySelectorAll(".product-quantity input")[0]
);
console.log(counter);
