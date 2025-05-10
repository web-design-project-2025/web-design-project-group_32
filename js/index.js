//Hero Section and related functionality

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
  "url('images/hero-images/" + randomImage + "')";
