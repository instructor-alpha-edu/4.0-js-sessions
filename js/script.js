const inputs = document.querySelectorAll(".input");
const errors = document.querySelectorAll(".error");
const form = document.querySelector(".form");
const modal = document.querySelector(".modal");
let errorsCount = 0;

function resetAllErrors() {
  errorsCount = 0;
  for (const error of errors) {
    error.classList.add("hide");
  }
}

function openModalWindow() {
  modal.classList.remove("modal-hide");
}

function closeModalWindow() {
  modal.classList.add("modal-hide");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  resetAllErrors();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      errors[i].classList.remove("hide");
      errorsCount++;
    }
  }

  if (errorsCount === 0) {
    form.reset();
    openModalWindow();
  }
});

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModalWindow();
  }
});
