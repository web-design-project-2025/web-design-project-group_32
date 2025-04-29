// Set up burgerMenu from Sean

const burgerMenu = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

function loadHandler() {
  fetch("json/hero.json")
    .then((response) => response.json())
    .then((data) => {
      const lastIndex = Number(localStorage.getItem("index"));

      let randomIndex = Math.floor(Math.random() * data.length);

      while (randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * data.length);
      }

      const randomImage = data[randomIndex];

      localStorage.setItem("index", randomIndex);

      const heroSection = document.getElementById("hero-section");
      heroSection.style.backgroundImage = "url('hero-img/" + randomImage + "')";
    });
}

window.addEventListener("load", loadHandler);
