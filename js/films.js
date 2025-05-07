// Data loading
function loadPopularSearches() {
  fetch("data/films.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const filmListElement = document.getElementById("popular-searches");
      for (let film of data.films.slice(0, 7)) {
        const filmPosterElement = document.createElement("div");
        filmPosterElement.innerHTML = `
          <img class="film-poster" src="${film.poster}">
          <div class="star-container">
          </div>
          `;
        filmListElement.appendChild(filmPosterElement);
      }
    })
    .catch((error) => {
      const filmListElement = document.getElementById("popular-searches");
      filmListElement.innerHTML = `<p>Failed to load films</p>`;
      console.log(error);
    });
}

function loadFilmsGallery() {
  fetch("data/films.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const filmListElement = document.getElementById("films-gallery");
      for (let film of data.films) {
        const filmPosterElement = document.createElement("div");
        filmPosterElement.innerHTML = `
          <img class="film-poster" src="${film.poster}">
          <div class="star-container">
          </div>
          `;
        filmListElement.appendChild(filmPosterElement);
      }
    })
    .catch((error) => {
      const filmsGalleryElement = document.getElementById("films-gallery");
      filmsGalleryElement.innerHTML = "Failed to load films";
      console.log(error);
    });
}

function loadHandler() {
  loadPopularSearches();
  loadFilmsGallery();
}

window.addEventListener("load", loadHandler);
