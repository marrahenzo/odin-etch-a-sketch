let container = document.querySelector("#container");
let totalSquares = 256;
let squaresPerRow = Math.sqrt(totalSquares);
let colorSelector = document.querySelector("#color");
let mouseDown = false;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for (let i = 0; i < totalSquares; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.className = "square";
  squareDiv.style.minWidth = 100 / squaresPerRow + "%";
  squareDiv.style.height = 0;
  squareDiv.style.paddingBottom = squareDiv.style.minWidth;
  container.appendChild(squareDiv);
}

let allSquares = document.querySelectorAll(".square");
allSquares.forEach((square) => {
  square.addEventListener("mousemove", function () {
    if (mouseDown) {
      square.style.backgroundColor = colorSelector.value;
    }
  });
});

console.log(container);
