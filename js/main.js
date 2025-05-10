// Set up burgerMenu from Sean

const burgerMenu = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

// HeroSection images
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

window.addEventListener("DOMContentLoaded", () => {
  const signInLink = document.getElementById("signInLink");
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  if (signInLink && isSignedIn) {
    signInLink.textContent = "SIGN OUT";
    signInLink.href = "#";
    signInLink.addEventListener("click", () => {
      localStorage.removeItem("isSignedIn");
      localStorage.setItem("signedOutMessage", "You have been signed out.");
      location.reload();
    });
  }

  const message = localStorage.getItem("signedOutMessage");
  if (message) {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.style.position = "fixed";
    messageBox.style.top = "80px";
    messageBox.style.right = "80px";
    messageBox.style.padding = "10px 30px";
    messageBox.style.backgroundColor = "#cc0000";
    messageBox.style.color = "white";
    messageBox.style.borderRadius = "5px";
    messageBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    messageBox.style.zIndex = "1000";
    document.body.appendChild(messageBox);

    setTimeout(() => {
      messageBox.remove();
    }, 3000);

    localStorage.removeItem("signedOutMessage");
  }
});
