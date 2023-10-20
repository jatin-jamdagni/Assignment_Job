// Assignment 1

const carousel = document.querySelector(".carousel");
const slide = document.querySelector(".carousel-slide");

const images = document.querySelectorAll(".carousel-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let size = window.innerWidth;

function slideLeft() {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  slide.style.transform = `translateX(-${size * index}px)`;
}

function slideRight() {
  index++;

  if (index > images.length - 1) {
    index = 0;
  }

  slide.style.transform = `translateX(-${size * index}px)`;
}

prevBtn.addEventListener("click", slideLeft);
nextBtn.addEventListener("click", slideRight);

let interval;

function startRotation() {
  interval = setInterval(slideRight, 3000);
}

function stopRotation() {
  clearInterval(interval);
}

carousel.addEventListener("mouseover", stopRotation);
carousel.addEventListener("mouseout", startRotation);

startRotation();

// Assignment 2

const prices = {
  "dark-chocolate": 2.0,
  "milk-chocolate": 1.5,
  "Chocolate-Cake": 1.75,
};

function updateTotal() {
  let inputs = document.querySelectorAll("input[type=number]");

  let totalItems = 0;
  let totalPrice = 0;

  for (let input of inputs) {
    let id = input.id;
    let value = parseInt(input.value);

    totalItems += value;

    totalPrice += value * prices[id];
  }

  let totalDisplay = document.getElementById("total-display");
  totalDisplay.innerHTML = `Total Items: ${totalItems}
   Total Price: $${totalPrice.toFixed(2)}`;

  let orderButton = document.getElementById("order-button");
  if (totalItems > 0 && totalItems <= 8) {
    orderButton.disabled = false;
  } else {
    orderButton.disabled = true;
  }
}

function submitOrder() {
  let inputs = document.querySelectorAll("input[type=number]");

  let order = [];

  for (let input of inputs) {
    let id = input.id;
    let value = parseInt(input.value);

    if (value > 0) {
      order.push({ id: id, value: value });
    }
  }

  let orderJSON = JSON.stringify(order);

  alert(`Your order has been submitted: ${orderJSON}`);
}
