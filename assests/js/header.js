const hideHeader = document.getElementById("hideHeader");
const hideHeaderSection = document.getElementById("hideHeaderSection");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const headerMusic = document.getElementById("headerMusic");
const headerPause = document.getElementById("headerPause");
const pausePopup = document.getElementById("pausePopup");
const reloadGame = document.getElementById("reloadGame");
let headerCheck = true;

hideHeader.addEventListener("click", () => {
  if (headerCheck) {
    header.style.display = "none";
    footer.style.display = "none";
    hideHeader.classList.add("fa-eye-slash");
    hideHeader.classList.remove("fa-eye");
    hideHeaderSection.style.bottom = "10px";
    headerCheck = false;
  } else {
    hideHeader.classList.remove("fa-eye-slash");
    hideHeader.classList.add("fa-eye");
    header.style.display = "block";
    footer.style.display = "block";
    hideHeaderSection.style.bottom = "40px";
    headerCheck = true;
  }
});

// console.log(hideHeader);

// sound off -----------
headerMusic.addEventListener("click", () => {
  if (touchSound) {
    headerMusic.classList.remove("fa-volume-high");
    headerMusic.classList.add("fa-volume-xmark");
    touchSound = false;
  } else {
    headerMusic.classList.remove("fa-volume-xmark");
    headerMusic.classList.add("fa-volume-high");
    touchSound = true;
  }
});

// sound off -----------
headerPause.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-circle-pause")) {
    // console.log("header pause");
    headerPause.classList.remove("fa-circle-pause");
    headerPause.classList.add("fa-play");
    pausePopup.style.display = "block";
  } else {
    headerPause.classList.remove("fa-play");
    headerPause.classList.add("fa-circle-pause");
    pausePopup.style.display = "none";
  }
});

//   rest game ----------------
reloadGame.addEventListener("click", handleResetGame);
