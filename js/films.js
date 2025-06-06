// Data loading
let filmsData;

function loadFilmsGallery() {
  fetch("data/films.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      filmsData = data.films;
      displayFilms(filmsData);
      // const filmListElement = document.getElementById("films-gallery");
      // for (let film of data.films) {
      //   const filmPosterElement = document.createElement("div");
      //   filmPosterElement.innerHTML = `
      //     <img class="film-poster" src="${film.poster}">
      //     <div class="star-container">
      //     </div>
      //     `;
      //   filmListElement.appendChild(filmPosterElement);
      // }
    })
    .catch((error) => {
      const filmsGalleryElement = document.getElementById("films-gallery");
      filmsGalleryElement.innerHTML = "Failed to load films";
      console.log(error);
    });
}

// sort films

function applyFilters() {
  if (!filmsData) {
    return;
  }

  const genre = document.getElementById("genre").value.toLowerCase();
  const rating = document.getElementById("rating").value.toLowerCase();
  const year = document.getElementById("year").value.toLowerCase();

  let filteredFilms = filmsData;

  if (genre !== "all") {
    filteredFilms = filteredFilms.filter((film) =>
      film.genre.map((g) => g.toLowerCase()).includes(genre)
    );
  }

  if (rating === "highest") {
    filteredFilms = filteredFilms.sort((a, b) => b.rating - a.rating);
  } else if (rating === "lowest") {
    filteredFilms = filteredFilms.sort((a, b) => a.rating - b.rating);
  }

  if (year !== "all") {
    if (year === "2020s") {
      filteredFilms = filteredFilms.filter(
        (film) => film.year >= 2020 && film.year < 2030
      );
    } else if (year === "2010s") {
      filteredFilms = filteredFilms.filter(
        (film) => film.year >= 2010 && film.year < 2020
      );
    } else if (year === "2000s") {
      filteredFilms = filteredFilms.filter(
        (film) => film.year >= 2000 && film.year < 2010
      );
    } else if (year === "1990s") {
      filteredFilms = filteredFilms.filter(
        (film) => film.year >= 1990 && film.year < 2000
      );
    } else if (year === "1980s") {
      filteredFilms = filteredFilms.filter(
        (film) => film.year >= 1980 && film.year < 1990
      );
    } else if (year === "1970s") {
      filteredFilms = filteredFilms.filter(
        (film) => film.year >= 1970 && film.year < 1980
      );
    }
  }
  displayFilms(filteredFilms);
}

function displayFilms(films) {
  const filmListElement = document.getElementById("films-gallery");
  filmListElement.innerHTML = "";
  films.forEach((film) => {
    const filmPosterElement = document.createElement("div");
    filmPosterElement.innerHTML = `
    <a href="film-detail.html?id=${film.id}"><img class="film-poster" src="${film.poster}"></a>
    <div class="star-container">
    </div>`;

    filmListElement.appendChild(filmPosterElement);
  });
}
function loadHandler() {
  loadFilmsGallery();
  document.getElementById("genre").value = "all";
}

window.addEventListener("load", loadHandler);

document.getElementById("genre").addEventListener("change", applyFilters);
document.getElementById("rating").addEventListener("change", applyFilters);
document.getElementById("year").addEventListener("change", applyFilters);
