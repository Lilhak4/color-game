var colors = generateRandomColors(6);
var grids = document.querySelectorAll(".grid");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var ix = 0; ix < grids.length; ix++) {
    grids[ix].style.background = colors[ix];
  }
  h1.style.background = "#232323"
})

colorDisplay.textContent = pickedColor;

for (var ix = 0; ix < grids.length; ix++) {
  grids[ix].style.backgroundColor = colors[ix];

  grids[ix].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
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