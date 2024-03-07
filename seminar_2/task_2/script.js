document.addEventListener("DOMContentLoaded", function () {
  // Находим кнопку для открытия модального окна
  const btnOpenModalWindow = document.querySelector(".btnOpen");

  // Находим модальное окно
  const modal = document.getElementById("modal");

  // Находим кнопку "Закрыть" в модальном окне
  const modalCloseBtn = modal.querySelector(".modal-close");

  // Добавляем обработчик события при клике на кнопку открытия модального окна
  btnOpenModalWindow.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Добавляем обработчик события при клике на кнопку "Закрыть"
  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закрываем модальное окно при клике вне его области
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
