let container = document.querySelector("#container");
//Default grid values

//Sets up the "Reset Grid" button
let resetButton = document.querySelector("#btn-reset");
resetButton.addEventListener("click", function () {
  let amount;
  do {
    amount = prompt("How many squares per side? (Max 100)");
  } while (amount > 100);

  initializeGrid(amount);
});

//Sets up the color selector
let colorSelector = document.querySelector("#color");
colorSelector.style.backgroundColor = colorSelector.value;
colorSelector.addEventListener("input", function () {
  colorSelector.style.backgroundColor = colorSelector.value;
});

//Determines whether the mouse will "paint" over the grid
let mouseActivated = false;
container.onmousedown = () => (mouseActivated = !mouseActivated);

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
    square.addEventListener("mousemove", function () {
      if (mouseActivated) {
        square.style.backgroundColor = colorSelector.value;
      }
    });
  });
}

initializeGrid(16);
