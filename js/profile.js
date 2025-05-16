const favoriteFilmDisplay = document.getElementById("favorite-film-display");
const nofavoriteFilmMessage = document.getElementById("no-favorite-film");

function renderFavorites() {
  // Clear display area
  favoriteFilmDisplay.innerHTML = "";

  const savedPosters = JSON.parse(localStorage.getItem("filmPosters")) || [];

  if (savedPosters.length > 0) {
    savedPosters.forEach((film) => {
      // Create a wrapper for the film
      const filmWrapper = document.createElement("div");
      filmWrapper.classList.add("film-wrapper");

      // Create link and poster image
      const link = document.createElement("a");
      link.href = `film-detail.html?id=${film.id}`;

      const posterImage = document.createElement("img");
      posterImage.src = film.poster;
      posterImage.classList.add("film-poster");

      link.appendChild(posterImage);
      filmWrapper.appendChild(link);

      // Create "Remove from Favorites" button
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-button");

      removeButton.addEventListener("click", function () {
        // Get latest saved posters
        let latestPosters =
          JSON.parse(localStorage.getItem("filmPosters")) || [];

        // Remove the film by ID
        latestPosters = latestPosters.filter((f) => f.id !== film.id);

        // Update localStorage
        localStorage.setItem("filmPosters", JSON.stringify(latestPosters));

        // Re-render list
        renderFavorites();
      });

      // Add button and append everything
      filmWrapper.appendChild(removeButton);
      favoriteFilmDisplay.appendChild(filmWrapper);
    });

    nofavoriteFilmMessage.textContent = "";
  } else {
    nofavoriteFilmMessage.textContent = "No favorites saved.";
  }
}

// Initial render on page load
renderFavorites();
