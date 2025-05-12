document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const videoUrl = params.get("video");
  const filmTilte = params.get("title");

  if (videoUrl) {
    const trailerIframe = document.getElementById("trailer-iframe");
    trailerIframe.src = decodeURIComponent(videoUrl);

    if (filmTilte) {
      const trailerTitle = document.getElementById("trailer-title");
      trailerTitle.textContent = decodeURIComponent(filmTilte);
    }
  } else {
    alert("Trailer not available!");
  }
});
