let container = document.querySelector("#container");
let totalSquares = 256;
let squaresPerRow = Math.sqrt(totalSquares);
let colorSelector = document.querySelector("#color");
let mouseActivated = false;

document.body.onmousedown = () => (mouseActivated = !mouseActivated);

for (let i = 0; i < totalSquares; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.className = "square";
  squareDiv.style.minWidth = 100 / squaresPerRow + "%";
  squareDiv.style.height = 0;
  squareDiv.style.paddingBottom = squareDiv.style.minWidth;
  container.appendChild(squareDiv);
}

function initializeGrid() {
  let allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.style.backgroundColor = "white";
    square.addEventListener("mousemove", function () {
      if (mouseActivated) {
        square.style.backgroundColor = colorSelector.value;
      }
    });
  });
}

initializeGrid();
