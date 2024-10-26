const winPop = document.getElementById("winpopup");
const winOkBtn = document.getElementById("winOkBtn");
const winTitle = document.getElementById("winTitle");

function winPopUp() {
  winPop.style.display = "block";
  winTitle.innerText = currentPlayer;
}

winOkBtn.addEventListener("click", () => {
  winPop.style.display = "none";
  handleResetGame();
});
