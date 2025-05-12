document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const videoUrl = params.get("video");

  if (videoUrl) {
    const trailerSource = document.getElementById("trailer-source");
    trailerSource.src = decodeURIComponent(videoUrl);

    const trailerVideo = document.getElementById("trailer-video");

    trailerVideo.load();
    trailerVideo.play();
  } else {
    alert("Trailer not available!");
  }
});
