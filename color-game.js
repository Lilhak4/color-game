'use strict'
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var grids = document.querySelectorAll(".grid");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected")
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickColor();
  for (var ix = 0; ix < grids.length; ix++) {
    if (colors[ix]) {
      grids[ix].style.background = colors[ix];
    } else {
      grids[ix].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected")
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickColor();
  for (var ix = 0; ix < grids.length; ix++) {
    grids[ix].style.background = colors[ix];
    grids[ix].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors "
  messageDisplay.textContent = "";
  for (var ix = 0; ix < grids.length; ix++) {
    grids[ix].style.background = colors[ix];
  }
  h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var ix = 0; ix < grids.length; ix++) {
  grids[ix].style.backgroundColor = colors[ix];

  grids[ix].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "#232323"
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color) {
  for (var ix = 0; ix < grids.length; ix++) {
    grids[ix].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var ix = 0; ix < num; ix++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}