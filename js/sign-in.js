const messageDivisionElement = document.getElementById(
  "sign-in-message-division"
);
const messageElement = document.getElementById("sign-in-message");
const submitElement = document.getElementById("sign-in-button");

const inputFields = document.querySelectorAll("#sign-in input");
const usernameInput = inputFields[0];
const passwordInput = inputFields[1];

function updateMessageStyle() {
  if (window.innerWidth <= 840) {
    messageElement.style.fontSize = "1.1rem";
    messageElement.style.paddingLeft = "1rem";
    messageElement.style.textAlign = "center";
  } else {
    messageElement.style.fontSize = "1.1rem";
    messageElement.style.paddingLeft = "63%";
    messageElement.style.textAlign = "left";
  }
}

updateMessageStyle();
window.addEventListener("resize", updateMessageStyle);

function checkInputs() {
  const userName = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const isFormValid = userName && password;
  submitElement.disabled = !isFormValid;

  if (isFormValid) {
    messageElement.innerHTML = "";
    messageDivisionElement.style.backgroundColor = "transparent";
  }
}

checkInputs();
usernameInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

submitElement.addEventListener("click", function () {
  messageElement.innerHTML = "You've signed in successfully.";
  messageDivisionElement.style.backgroundColor = "#009900";

  setTimeout(() => {
    messageElement.innerHTML = "";
    messageDivisionElement.style.backgroundColor = "transparent";
    window.location.href = "index.html";
  }, 2000);
});
