let container = document.querySelector("#container");

//Determines whether the mouse will "paint" over the grid
let mouseActivated = false;
document.onmousedown = () => (mouseActivated = true);
document.onmouseup = () => (mouseActivated = false);

//Sets up color mode buttons
let colorMode = "normal";
let colorNormalButton = document.querySelector("#btn-normal");
let colorRainbowButton = document.querySelector("#btn-rainbow");
let colorRandomDarkenButton = document.querySelector("#btn-random-darken");

colorNormalButton.addEventListener("click", function () {
  colorMode = "normal";
  mouseActivated = false;
});
colorRainbowButton.addEventListener("click", function () {
  colorMode = "rainbow";
  mouseActivated = false;
});
colorRandomDarkenButton.addEventListener("click", function () {
  colorMode = "darken";
  mouseActivated = false;
});

//Random color variables for their respective modes
let color1 = Math.random() * 256;
let color2 = Math.random() * 256;
let color3 = Math.random() * 256;

//Sets up the grid size slider
let gridSlider = document.querySelector("#grid-slider");
gridSlider.value = 16;
let gridSliderLabel = document.querySelector("#grid-slider-label");

gridSlider.addEventListener("input", function () {
  gridSliderLabel.textContent = gridSlider.value + " x " + gridSlider.value;
  mouseActivated = false;
});

//Sets up the "Reset Grid" button
let resetButton = document.querySelector("#btn-reset");
resetButton.addEventListener("click", function () {
  let amount;
  do {
    amount = gridSlider.value;
  } while (amount > 100);

  initializeGrid(amount);
});

//Sets up the color selector
let colorSelector = document.querySelector("#color");
colorSelector.style.backgroundColor = colorSelector.value;
colorSelector.addEventListener("input", function () {
  colorSelector.style.backgroundColor = colorSelector.value;
  mouseActivated = false;
});

//Called upon startup and upon reset
function initializeGrid(amountOfSquares) {
  //Disable painting to avoid painting by mistake
  mouseActivated = false;
  //Clear grid
  container.textContent = "";
  //Determine amount of divs depending on input
  let totalSquares = Math.pow(amountOfSquares, 2);
  //Fill the grid with empty divs
  for (let i = 0; i < totalSquares; i++) {
    let squareDiv = document.createElement("div");
    squareDiv.className = "square";
    squareDiv.style.minWidth = 100 / amountOfSquares + "%";
    squareDiv.style.height = 0;
    squareDiv.style.paddingBottom = squareDiv.style.minWidth;
    container.appendChild(squareDiv);
  }

  //Add event listeners to each one to allow "painting"
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", function () {
      if (mouseActivated) {
        switch (colorMode) {
          case "normal":
            square.style.backgroundColor = colorSelector.value;
            break;
          case "rainbow":
            color1 = Math.random() * 256;
            color2 = Math.random() * 256;
            color3 = Math.random() * 256;
            square.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
            break;
          case "darken":
            if (square.style.backgroundColor != "white") {
              let rgbColors = getRgbValues(square.style.backgroundColor);
              square.style.backgroundColor = `rgb(
                ${rgbColors[0] - rgbColors[0] / 3},
                ${rgbColors[1] - rgbColors[1] / 3},
                ${rgbColors[2] - rgbColors[2] / 3}
              )`;
            } else {
              color1 = Math.random() * 256;
              color2 = Math.random() * 256;
              color3 = Math.random() * 256;
              square.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
            }
            break;
        }
      }
    });
  });
}

function getRgbValues(colorString) {
  let stringArr = colorString.split(", ");
  let regex = /(\d+)/g;
  let newArr = [
    stringArr[0].match(regex).join(),
    stringArr[1].match(regex).join(),
    stringArr[2].match(regex).join(),
  ];
  return newArr;
}

initializeGrid(16);
