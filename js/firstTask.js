const circle = document.querySelector(".circle");
const button = document.querySelector("#btn");

function setButtonText() {
  if (circle.classList.contains("hide")) {
    button.textContent = "Показать круг";
  } else {
    button.textContent = "Скрыть круг";
  }
}
setButtonText();

button.addEventListener("click", function () {
  // 1st option:
  // const hasClassHide = circle.classList.contains("hide"); // true or false
  // if (hasClassHide) {
  //   circle.classList.remove("hide");
  // } else {
  //   circle.classList.add("hide");
  // }

  // 2nd option:
  circle.classList.toggle("hide");

  // 2 состояния кнопки: 1) когда шар скрыт - "Показать круг"; 2) когда шар НЕ скрыт - "Скрыть круг"

  setButtonText();
});
