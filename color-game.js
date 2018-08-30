var colors = generateRandomColors(6);

var grids = document.querySelectorAll(".grid");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var ix = 0; ix < grids.length; ix++) {
  grids[ix].style.backgroundColor = colors[ix];

  grids[ix].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
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