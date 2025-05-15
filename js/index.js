// Hero section
const images = [
  "hero-image-1.jpg",
  "hero-image-2.jpg",
  "hero-image-3.jpg",
  "hero-image-4.jpg",
];

const lastIndex = Number(localStorage.getItem("index"));

let randomIndex = Math.floor(Math.random() * images.length);

while (randomIndex === lastIndex) {
  randomIndex = Math.floor(Math.random() * images.length);
}

const randomImage = images[randomIndex];

localStorage.setItem("index", randomIndex);

const heroSection = document.getElementById("hero-section");
heroSection.style.backgroundImage =
  "url('assets/images/hero-images/" + randomImage + "')";

// Search bar
const searchBarElement = document.getElementById("search-bar");
const searchButtonElement = document.getElementById("search-button");
const searchResultElement = document.getElementById("search-result");

// Event listeners
searchButtonElement.addEventListener("click", searchFilms);
searchBarElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchFilms();
  }
});

filmsData = [];

fetch("data/films.json")
  .then((response) => response.json())
  .then((data) => {
    filmsData = data.films;
  })
  .catch((error) => {
    console.error("Error fetching films data:", error);
    searchResultElement.textContent = "Failed to load film data.";
  });

function searchFilms() {
  const query = searchBarElement.value.trim().toLowerCase();

  if (query === "") {
    searchResultElement.textContent = "Enter a film title.";
    return;
  }

  // Clears search result
  searchResultElement.innerHTML = "";

  const searchResult = filmsData.filter((film) =>
    film.title.trim().toLowerCase().includes(query)
  );

  if (searchResult.length > 0) {
    searchResult.forEach((film) => {
      const resultItem = document.createElement("div");
      resultItem.innerHTML = `
    <a href="film-detail.html?id=${film.id}"><img class="film-poster" src="${film.poster}"></a>`;
      searchResultElement.appendChild(resultItem);
    });
  } else {
    searchResultElement.textContent = "No matches found.";
  }
}
