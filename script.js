const clickSound = new Audio("./wood.MP3");
const clickSound2 = new Audio("./click.MP3");
const cells = document.querySelectorAll("[data-cell]");
let currentPlayer = "X";
let playerXCells = [];
let playerOCells = [];
let touchSound = true;

// handleCellClick ------------------------------
function handleCellClick(e) {
  const cell = e.target;

  if (cell.textContent !== "") return;

  // click sound effect -----------
  if (touchSound) clickSound.play();

  //   currnet cell inset content ------------
  cell.textContent = currentPlayer;

  //   current player chaking update arr data --------
  if (currentPlayer === "X") {
    playerXCells.push(cell);
    handleTextStyle();

    // console.log(playerXCells);
    if (playerXCells?.length > 3) {
      handleResetCell(playerXCells.shift());
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

  // currentPlayer = currentPlayer === "X" ? "O" : "X";

  //  check win and reset game ----------------
  if (playerXCells?.length >= 3 || playerOCells?.length >= 3) {
    if (handleCheckWin()) {
      handleWinActiveCell();
      winPopUp();
      // console.log(`${currentPlayer} wins!`);
      // handleResetGame();
    }
  }
  // current player chaking ---------------
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// handleResetCell ------------------------------
function handleResetCell(cell) {
  cell.textContent = "";
  cell.classList = "cell";
  handleTextStyle();
}

// handleResetGame ------------------------------
function handleResetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList = "cell";
  });
  playerXCells = [];
  playerOCells = [];
  currentPlayer = "X";
}

// handleCheckWin -------------------------
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
      const result = cells[i].textContent === currentPlayer;
      if (result) {
        console.log("check win");
      }
      return result;
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

// active cell --------------------
function handleWinActiveCell() {
  const element = Array.from(cells);
  // const text = currentPlayer === "X" ? "O" : "X";
  const arr = element.filter((value) => {
    const result = value.textContent === currentPlayer;
    return result;
  });
  // win cell active class added ----------------
  arr?.forEach((cell) => {
    cell.classList.add("win-active-cell");
  });
}

// all cell event listener add ---------------------
cells.forEach((cell) => {
  // handleTextStyle()
  // console.log(cell)
  cell.addEventListener("click", handleCellClick);
});

// =============================================
// ======all button sound effect add =========
// =============================================

const button = document.querySelectorAll(".button");
// console.log(button);
button.forEach((element) => {
  element.addEventListener("click", () => {
    if (touchSound) clickSound2.play();
  });
});
