const hideHeader = document.getElementById("hideHeader");
const hideHeaderSection = document.getElementById("hideHeaderSection");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
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
