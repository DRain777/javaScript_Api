const orientationMessageEl = document.querySelector(".orientation-msg");

// Добавляем обработчик события "change" для объекта "screen.orientation"
screen.orientation.addEventListener("change", (event) => {
  // Извлекаем тип ориентации из события
  const type = event.target.type;

  // Проверяем тип ориентации и обновляем сообщение в зависимости от ориентации
  if (type === "landscape-primary") {
    // Если ориентация - ландшафтная, обновляем текст сообщения
    orientationMessageEl.textContent =
      "Ориентации экрана изменена на: Ландшафтная";
  } else {
    // Если ориентация - не ландшафтная, считаем ее портретной и обновляем текст сообщения
    orientationMessageEl.textContent =
      "Ориентации экрана изменена на: Портретная";
  }
});

// task2

// Определение функции confirmClose, которая будет вызываться перед закрытием вкладки или окна
function confirmClose(event) {
  // Предотвращение стандартного действия браузера перед выгрузкой страницы (закрытием окна)
  event.preventDefault();

  // Находим поле ввода с классом .inputField
  const inputField = document.querySelector(".inputField");

  // Проверяем, содержит ли поле ввода какое-либо значение
  if (inputField.value !== "") {
    // Если поле ввода не пустое, возвращаем false,
    // чтобы показать стандартное предупреждение браузера о закрытии страницы
    return false;
  }
}

// Добавляем обработчик события beforeunload к объекту window
// Этот обработчик вызывает функцию confirmClose перед закрытием страницы
window.addEventListener("beforeunload", confirmClose);








