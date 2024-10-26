const clickSound = new Audio("./wood.MP3");
const cells = document.querySelectorAll("[data-cell]");
// console.log(cells);
let currentPlayer = "X";
let playerXCells = [];
let playerOCells = [];

// handleCellClick ------------------------------
function handleCellClick(e) {
  // handleTextStyle();
  // console.log(2);

  // console.log({playerOCells,playerXCells})
  const cell = e.target;
  //   console.log(cell.textContent )
  if (cell.textContent !== "") return;

  // click sound effect -----------
  clickSound.play();

  //   console.log('message')
  //   currnet cell inset content ------------
  cell.textContent = currentPlayer;

  //   current player chaking update arr data --------
  if (currentPlayer === "X") {
    playerXCells.push(cell);
    handleTextStyle();

    // console.log(playerXCells);
    if (playerXCells?.length > 3) {
      handleResetCell(playerXCells.shift());
      //   console.log(playerXCells.shift());
      //   console.log(playerXCells.length);
    }
  } else {
    if (currentPlayer === "O") {
      playerOCells.push(cell);
      handleTextStyle();

      // console.log(playerOCells);
      if (playerOCells.length > 3) {
        handleResetCell(playerOCells.shift());
      }
    }
  }

  // current player chaking ---------------
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  //  check win and reset game ----------------
  if (playerXCells?.length >= 3 || playerOCells?.length >= 3) {
    if (handleCheckWin()) {
      // console.log(handleCheckWin());
      alert(`${currentPlayer} wins!`);
      // console.log(`${currentPlayer} wins!`);
      handleResetGame();
    }
  }
}

// handleResetCell ------------------------------
function handleResetCell(cell) {
  cell.textContent = "";
  // cell.removeAttribute('class');
  // cell.classList.remove("yellow-0");
  cell.classList = "cell";
  // console.log(cell);
  // console.dir(cell);
  handleTextStyle();
}

// handleResetGame ------------------------------
function handleResetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  playerXCells = [];
  playerOCells = [];
  currentPlayer = "X";
}

// handleCheckWin ------------------------------
function handleCheckWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winCombinations.some((combination) => {
    // console.log(combination)
    return combination.every((i) => {
      //   console.log(i);
      //   console.log(cells[i].textContent === currentPlayer);
      return cells[i].textContent === currentPlayer;
    });
  });
}

// text style ---------------------
function handleTextStyle() {
  // console.log({ xCell, yCell });
  playerXCells?.forEach((cell, i) => {
    // console.log({ i });
    // cell.style.color = `yellow`;
    cell.classList.add(`yellow-${i}`);
    // console.log(1);
  });
  playerOCells?.forEach((cell, i) => {
    cell.classList.add(`green-${i}`);
  });
}

// all cell event listener add ---------------------
cells.forEach((cell) => {
  // handleTextStyle()
  // console.log(cell)
  cell.addEventListener("click", handleCellClick);
});
