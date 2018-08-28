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

colorDisplay.textContent = pickedColor;

for (var ix = 0; ix < grids.length; ix++) {
  grids[ix].style.backgroundColor = colors[ix];
};