// const btnBuy = document.querySelector('.btnBuy');

// btnBuy.addEventListener("click",  (e) => {
//     btnBuy.textContent = "Товар добавлен в корзину";
//     setTimeout(2000).btnBuy.textContent = "Buy"

// });

document.addEventListener("DOMContentLoaded", function () {
  const btnBuy = document.querySelector(".btnBuy");

  btnBuy.addEventListener("click", (event) => {
    // Проверка, является ли событие доверенным
    if (event.isTrusted) {
      // Сохраняем текущий текст кнопки
      const originalText = btnBuy.innerText;

      // Устанавливаем новый текст кнопки
      btnBuy.innerText = "Товар добавлен в корзину";

      // Задержка в 2 секунды перед возвращением исходного текста
      setTimeout(() => {
        btnBuy.innerText = originalText;
      }, 2000);
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const btnBuy = document.querySelector(".btnBuy");

  function autoClick() {
    btnBuy.click();
  }

  // Вызываем функцию autoClick каждые 3 секунды
  setInterval(autoClick, 3000);
});
