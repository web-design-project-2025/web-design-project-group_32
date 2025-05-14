// Get the comments section data
fetch("data/comments.json")
  .then((response) => response.json())
  .then((comments) => {
    const container = document.getElementById("comments-container");

    comments.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";

      // Calculate rating
      const fullStars = Math.floor(comment.rating);
      const halfStar = comment.rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      // Show rating
      let starsHTML = `<span class="stars">`;
      for (let i = 0; i < fullStars; i++) {
        starsHTML += `<img src="../images/rating-system/star-rating-full.png" alt="full star" class="star">`;
      }
      if (halfStar) {
        starsHTML += `<img src="../images/rating-system/star-rating-half.png" alt="half star" class="star">`;
      }
      for (let i = 0; i < emptyStars; i++) {
        starsHTML += `<img src="../images/rating-system/star-rating-empty.png" alt="empty star" class="star">`;
      }
      starsHTML += `</span>`;

      // Show the comment section
      commentDiv.innerHTML = `
        <img src="${comment.avatar}" alt="Avatar" class="avatar">
        <div class="comment-content">
        <div class="user-name">
        <span class="username">${comment.username}</span> rated ${starsHTML}</div>
        <div class="text">${comment.text}</div>
        </div>
        `;

      container.appendChild(commentDiv);
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/films.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error! Status:${response.status}");
      }
      return response.json();
    })
    .then((data) => {
      const filmsData = data.films;
      const params = new URLSearchParams(window.location.search);
      const filmId = params.get("id");

      if (!filmId) {
        document.getElementById("film-container").innerHTML =
          "<p>Film not found! </p>";
        return;
      }

      const film = filmsData.find((f) => f.id.toString() === filmId.toString());
      if (film) {
        document.title = `STARVIEW | ${film.title}`;
        document.getElementById("film-title").textContent = film.title;
        document.getElementById("year").textContent = "(" + film.year + ")";
        document.getElementById("genre").textContent = film.genre;
        document.getElementById("film-director").textContent =
          "Directed by" + film.director;
        document.getElementById("film-plot").textContent = film.plot;
        document.getElementById("film-poster").src = film.poster;

        const ratingSection = document.getElementById("rating-section");
        const filmFullStar = Math.floor(film.rating);
        const filmHalfStar = film.rating % 1 >= 0.5;
        const filmEmptyStar = 5 - filmFullStar - (filmHalfStar ? 1 : 0);

        let filmStarsHTML = `<span class="film-star">`;
        for (let i = 0; i < filmFullStar; i++) {
          filmStarsHTML += `<img src="../images/rating-system/star-rating-full.png" alt="full star" class="film-star">`;
        }
        if (filmHalfStar) {
          filmStarsHTML += `<img src="../images/rating-system/star-rating-half.png" alt="half star" class="film-star">`;
        }
        for (let i = 0; i < filmEmptyStar; i++) {
          filmStarsHTML += `<img src="../images/rating-system/star-rating-empty.png" alt="empty star" class="film-star">`;
        }
        filmStarsHTML += `</span>`;
        ratingSection.innerHTML = filmStarsHTML;

        const castList = document.getElementById("film-cast");
        castList.innerHTML = "";
        film.cast.forEach((actor) => {
          const li = document.createElement("li");
          li.textContent = actor;
          castList.appendChild(li);
        });

        document
          .getElementById("trailer-button")
          .addEventListener("click", () => {
            if (film.trailer) {
              const trailerUrl = `trailer.html?video=${encodeURIComponent(
                film.trailer
              )}&title=${encodeURIComponent(film.title)}`;
              window.location.href = trailerUrl;
            } else {
              alert("Trailer not available for this film.");
            }
          });
      } else {
        document.getElementById("film-container").innerHTML =
          "<p>Film not found!</p>";
      }
    })
    .catch((error) => {
      document.getElementById(
        "film-container"
      ).innerHTML = `<p>Error loading film data.</p>`;
    });
});

const favoriteButton = document.getElementById("favorite");
const filmPoster = document.getElementById("film-poster");

// Add films to the favorites list — code starts here

favoriteButton.addEventListener("click", function () {
  const poster = filmPoster.src;
  const params = new URLSearchParams(window.location.search);
  const filmId = params.get("id");

  let favoriteFilms = JSON.parse(localStorage.getItem("filmPosters")) || [];

  const alreadySaved = favoriteFilms.some((f) => f.id === filmId);

  const messageBox = document.createElement("div");
  messageBox.classList.add("message-box", "mb-sign-in");
  document.body.appendChild(messageBox);

  if (!alreadySaved) {
    favoriteFilms.push({ id: filmId, poster: poster });
    localStorage.setItem("filmPosters", JSON.stringify(favoriteFilms));
    messageBox.textContent = "Added to favorites.";
  } else {
    messageBox.textContent = "Already in favorites.";
    messageBox.classList.add("message-box", "mb-sign-out");
  }

  setTimeout(() => {
    messageBox.remove();
  }, 2000);
});
