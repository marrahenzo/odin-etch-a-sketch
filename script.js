let container = document.querySelector("#container");
let totalSquares = 256;
let squaresPerRow = Math.sqrt(totalSquares);

for (let i = 0; i < totalSquares; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.className = "square";
  squareDiv.appendChild(document.createTextNode("\u00A0"));
  squareDiv.style.minWidth = 100 / squaresPerRow + "%";
  squareDiv.style.height = 0;
  squareDiv.style.paddingBottom = squareDiv.style.minWidth;
  container.appendChild(squareDiv);
}

let allSquares = document.querySelectorAll(".square");
allSquares.forEach((square) => {
  square.addEventListener("mouseenter", function () {
    square.style.backgroundColor = "red";
  });
});

console.log(container);
