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
    .then((data) => {
      const filmListElement = document.getElementById("popular-searches");
      for (let film of data.films.slice(0, 7)) {
        const filmPosterElement = document.createElement("div");
        filmPosterElement.innerHTML = `
        <img class="film-poster" src="${film.poster}">
        <div class="star-container">
        ${'<img src="images/star.png" alt="star-rating" class="star">'.repeat(
          film.rating
        )}
        </div>
        `;
        filmListElement.appendChild(filmPosterElement);
      }
    });
}

function loadHandler() {
  loadFilms();
}

window.addEventListener("load", loadHandler);
