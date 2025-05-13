document.addEventListener("DOMContentLoaded", () => {
  const savedPosters = JSON.parse(localStorage.getItem("filmPosters")) || [];

  const favoriteFilmDisplay = document.getElementById("favorite-film-display");
  const nofavoriteFilmMessage = document.getElementById("no-favorite-film");

  if (savedPosters.length > 0) {
    savedPosters.forEach((poster) => {
      const posterImage = document.createElement("img");
      posterImage.src = poster;
      posterImage.classList.add("film-poster");
      favoriteFilmDisplay.appendChild(posterImage);
    });
  } else {
    nofavoriteFilmMessage.innerHTML =
      "No favorite film is saved at this moment.";
  }
});
