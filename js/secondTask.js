const usernameInput = document.querySelector("#usernameInput");
// const submitButton = document.querySelector("button[type='submit']");
const form = document.querySelector("form");
const greetBlock = document.querySelector(".greet");
const greetName = document.querySelector(".greet-name");
const errorMessage = document.querySelector("p.error");

// 1. брать значение из usernameInput
//    1.1. получить сам HTML node input-а
//    1.2. у этой ноды вытащить поле value
// 2. поменять содержимое переменной greetName на значение из usernameInput
// 3. при отправке формы (нажатие на button) показывать greetBlock

// submitButton.addEventListener("click", function (event) {
form.addEventListener("submit", function (event) {
  event.preventDefault();
  errorMessage.textContent = "";

  if (usernameInput.value.trim() !== "") {
    greetName.textContent = usernameInput.value;
    greetBlock.classList.remove("hide");
  } else {
    errorMessage.textContent = "Вы ввели пустую строчку, повторите свою попытку!";
  }
});
