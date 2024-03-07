

// Добавляем обработчик события при нажатии на клавишу
document.addEventListener("keydown", (e) => {
  // Проверяем, была ли нажата клавиша пробела
  if (e.key === " ") {
    // Показываем кнопку
    btnOpenModalWindow.style.display = "block";

    // Сбрасываем цвет кнопки
    btnOpenModalWindow.style.color = ""; // Вернуть цвет по умолчанию, например, черный
  }
});
// Находим кнопку
const btnOpenModalWindow = document.querySelector(".btnOpen");

// Добавляем обработчик события при нажатии на кнопку
btnOpenModalWindow.addEventListener("click", (e) => {
  // Изменяем цвет кнопки
  btnOpenModalWindow.style.color = "red";

  // Скрываем кнопку
  btnOpenModalWindow.style.display = "none";
});

// Добавляем обработчик события при нажатии на клавишу
document.addEventListener("keydown", (e) => {
  // Проверяем, была ли нажата клавиша пробела
  if (e.key === " ") {
    // Показываем кнопку
    btnOpenModalWindow.style.display = "block";

    // Сбрасываем цвет кнопки
    btnOpenModalWindow.style.color = ""; // Вернуть цвет по умолчанию, например, черный
  }
});
