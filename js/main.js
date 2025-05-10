// Burger Menu Toggle

const burgerMenu = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

//Hero Section and related functionality

function loadHandler() {
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
}

document.addEventListener("DOMContentLoaded", loadHandler);

//Sign In/Out Logic and Corresponding Functional Code

const signInLink = document.getElementById("signInLink");
const isSignedIn = localStorage.getItem("isSignedIn") === "true";

if (signInLink && isSignedIn) {
  signInLink.textContent = "SIGN OUT";
  signInLink.href = "#";
  signInLink.addEventListener("click", () => {
    localStorage.removeItem("isSignedIn");
    localStorage.setItem("signedOutMessage", "You've signed out successfully.");
    location.reload();
  });
}

const message = localStorage.getItem("signedOutMessage");
if (message) {
  const messageBox = document.createElement("div");
  messageBox.textContent = message;
  messageBox.classList.add("message-box-sign-out");
  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 3000);

  localStorage.removeItem("signedOutMessage");
}
