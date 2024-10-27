const hideHeader = document.getElementById("hideHeader");
const hideHeaderSection = document.getElementById("hideHeaderSection");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const headerMusic = document.getElementById("headerMusic");
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
