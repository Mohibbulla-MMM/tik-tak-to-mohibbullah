const cells = document.querySelectorAll("[data-cell]");
// console.log(cells);
let currentPlayer = "X";
let playerXCells = [];
let playerOCells = [];

// handleCellClick ------------------------------
function handleCellClick(e) {
  // console.log({playerOCells,playerXCells})
  const cell = e.target;
  //   console.log(cell.textContent )
  if (cell.textContent !== "") return;
  //   console.log('message')
  //   currnet cell inset content ------------
  cell.textContent = currentPlayer;

  //   current player chaking update arr data --------
  if (currentPlayer === "X") {
    playerXCells.push(cell);
    if (playerXCells?.length > 3) {
      handleResetCell(playerXCells.shift());
      //   console.log(playerXCells.shift());
      //   console.log(playerXCells.length);
    }
  } else {
    if (currentPlayer === "O") {
      playerOCells.push(cell);
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
      console.log(handleCheckWin());
      alert(`${currentPlayer} wins!`);
      console.log(`${currentPlayer} wins!`);
        handleResetGame();
    }
  }
}

// handleResetCell ------------------------------
function handleResetCell(cell) {
  cell.textContent = "";
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



// ---------------------
cells.forEach((cell) => {
  // console.log(cell)
  cell.addEventListener("click", handleCellClick);
});
