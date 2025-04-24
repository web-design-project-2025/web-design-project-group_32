// Set up burgerMenu from Sean
const burgerMenu = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

// Data loading
function loadFilms() {
  fetch("data/films.json")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log("Films have been loaded");
    });
}

function loadHandler() {
  loadFilms();
}

window.addEventListener("load", loadHandler);
