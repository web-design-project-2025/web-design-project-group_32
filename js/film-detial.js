// Get the comments section data
fetch("../json/comments.json")
  .then((response) => response.json())
  .then((comments) => {
    const container = document.getElementById("comments-container");

    comments.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";

      commentDiv.innerHTML = `
        <img src="${comment.avatar}" alt="Avatar" class="avatar">
        <div class="comment-content">
        <div class="user-name">${comment.username}</div>
        <div class="text">${comment.text}</div>
        </div>
        `;

      container.appendChild(commentDiv);
    });
  });
