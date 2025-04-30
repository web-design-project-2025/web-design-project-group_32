// Set up burgerMenu from Sean

const burgerMenu = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

// HeroSection images
function loadHandler() {
  const images = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg"];

  const lastIndex = Number(localStorage.getItem("index"));

  let randomIndex = Math.floor(Math.random() * images.length);

  while (randomIndex === lastIndex) {
    randomIndex = Math.floor(Math.random() * images.length);
  }

  const randomImage = images[randomIndex];

  localStorage.setItem("index", randomIndex);

  const heroSection = document.getElementById("hero-section");
  heroSection.style.backgroundImage = "url('hero-img/" + randomImage + "')";
}

window.addEventListener("load", loadHandler);
