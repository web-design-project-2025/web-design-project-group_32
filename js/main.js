// Burger menu toggle
const burgerMenu = document.getElementById("burgermenu");
const mobileMenu = document.getElementById("mobileMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("show");
});

// Sign in/out logic and corresponding functional code

const signInLink = document.getElementById("sign-in-link");
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
  messageBox.classList.add("message-box", "mb-sign-out");
  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 3000);

  localStorage.removeItem("signedOutMessage");
}
