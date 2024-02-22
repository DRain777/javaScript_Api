// window.addEventListener("beforeunload", function (e) {
//   // Отменяем закрытие страницы
//   e.preventDefault();
//   // Стандартное сообщение браузера
//   e.returnValue = "";
//   // Всплывающее окно с подтверждением
//   var confirmationMessage = " куда собрался?";

//   // (Some browsers ignore the text anyway) Некоторые браузеры все равно игнорируют текст
//   e.returnValue = confirmationMessage;
//   return confirmationMessage;
// });



// подверждения закрытия страницы. Создайте всплывающее окно или диалоговое окно которое появится призакрытии страницы

// window.onbeforeunload = (evt) => {
//     evt.preventDefault();
// };
