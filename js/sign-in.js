const submitElement = document.getElementById("sign-in-button");

const inputFields = document.querySelectorAll("#sign-in input");
const usernameInput = inputFields[0];
const passwordInput = inputFields[1];

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
  const messageBox = document.createElement("div");
  messageBox.textContent = "You've signed in successfully.";
  messageBox.classList.add("message-box-sign-in");
  document.body.appendChild(messageBox);

  localStorage.setItem("isSignedIn", "true");

  setTimeout(() => {
    messageBox.remove();
    window.location.href = "index.html";
  }, 3000);
});
