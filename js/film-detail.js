// Get the comments section data
fetch("../data/comments.json")
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
        starsHTML += `<i class="fa-solid fa-star"></i>`;
      }
      if (halfStar) {
        starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
      }
      for (let i = 0; i < emptyStars; i++) {
        starsHTML += `<i class="fa-regular fa-star"></i>`;
      }
      starsHTML += `</span>`;

      // Show the comment section
      commentDiv.innerHTML = `
        <img src="${comment.avatar}" alt="Avatar" class="avatar">
        <div class="comment-content">
        <div class="user-name">${comment.username} ${starsHTML}</div>
        <div class="text">${comment.text}</div>
        </div>
        `;

      container.appendChild(commentDiv);
    });
  });
