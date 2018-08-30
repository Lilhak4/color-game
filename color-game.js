var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var grids = document.querySelectorAll(".grid");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var ix = 0; ix < grids.length; ix++) {
  grids[ix].style.backgroundColor = colors[ix];

  grids[ix].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct"
    } else {
      this.style.background = "#232323"
      messageDisplay.textContent = "Try Again"
    }
  });
}