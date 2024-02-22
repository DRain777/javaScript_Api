const btnAdd = document.querySelector('.add');
const btnDelete = document.querySelector('.delete');
const btnClone = document.querySelector('.clone');
const contentEl = document.querySelector(".content");

btnAdd.addEventListener('click',  (e) => {
    const newDivEl = document.createElement('div');
    newDivEl.classList.add('box');
    newDivEl.textContent = contentEl.children.length + 1;
    contentEl.appendChild(newDivEl);
});



btnDelete.addEventListener('click' , () => {
    const lastBox = contentEl.lastChild;
    contentEl.removeChild(lastBox);
});



btnClone.addEventListener('click',() => {
  const lastBox = contentEl.lastChild;
  // Получаем последний дочерний элемент узла contentEl и сохраняем его в переменной lastBox.
  const clone = lastBox.cloneNode(true);
  // Создаем клон последнего дочернего элемента lastBox с помощью метода cloneNode.
  // Параметр true указывает на то, что нужно клонировать также и все дочерние элементы.

  contentEl.appendChild(clone);
  // Добавляем клонированный элемент в конец списка дочерних элементов узла contentEl.
});

















// const btnAdd = document.querySelector(".add"); // Находим элемент кнопки с классом "add" и сохраняем его в переменную btnAdd
// btnAdd.addEventListener("click", (e) => {
//   // Добавляем слушатель события 'click' на кнопку
//   const newDivEl = document.createElement("div"); // Создаем новый элемент div и сохраняем его в переменную newDivEl
//   newDivEl.classList.add("box"); // Добавляем класс 'box' к созданному элементу div
//   newDivEl.textContent = contentEl.children.length + 1; // Устанавливаем текст элемента div, который равен количеству дочерних элементов у contentEl плюс 1
//   contentEl.appendChild(newDivEl); // Добавляем созданный div как дочерний элемент к элементу с id "contentEl"
// });



// 1. `btnDelete.addEventListener('click' , () => { ... })`: Здесь мы добавляем слушатель событий на кнопку с именем `btnDelete`, который реагирует на событие "click" (щелчок мышью). Когда пользователь кликает на кнопку, выполняется функция, определенная внутри стрелочной функции `() => { ... }`.

// 2. `const lastBox = contentEl.lastChild;`: Внутри функции мы создаем переменную `lastBox`, которая содержит последний дочерний элемент (последний элемент) элемента с именем `contentEl`. `contentEl` вероятно представляет собой контейнер, содержащий другие элементы.

// 3. `contentEl.removeChild(lastBox);`: Затем мы удаляем элемент `lastBox` из родительского элемента `contentEl`. Это означает, что при каждом щелчке на кнопку элемент, который является последним дочерним элементом в `contentEl`, будет удален из DOM (Document Object Model).

// Таким образом, данный код отвечает за удаление последнего дочернего элемента из контейнера при каждом щелчке на кнопку с именем `btnDelete`.






// btnClone.addEventListener('click', () => {
//     // Событие 'click' привязано к кнопке btnClone. Когда происходит клик,
//     // выполняется функция обратного вызова (стрелочная функция).

//     const lastBox = contentEl.lastChild;
//     // Получаем последний дочерний элемент узла contentEl и сохраняем его в переменной lastBox.

//     const clone = lastBox.cloneNode(true);
//     // Создаем клон последнего дочернего элемента lastBox с помощью метода cloneNode.
//     // Параметр true указывает на то, что нужно клонировать также и все дочерние элементы.

//     contentEl.appendChild(clone);
//     // Добавляем клонированный элемент в конец списка дочерних элементов узла contentEl.
// });
// Комментарии помогают понять, что делает каждая строка кода:

// addEventListener: Этот метод привязывает обработчик событий (в данном случае, функцию) к элементу DOM (в данном случае, кнопке btnClone). Когда событие происходит, функция обработчика выполняется.
// 'click': Это строка, представляющая тип события, на которое будет реагировать обработчик (в данном случае, клик мыши).
// () => { ... }: Это стрелочная функция, которая является обработчиком события click.
// contentEl.lastChild: contentEl предполагается быть DOM-элементом, вероятно, какой-то контейнер. lastChild возвращает последний дочерний элемент контейнера.
// cloneNode(true): Метод cloneNode создает копию узла. Параметр true указывает на то, что нужно клонировать также и все дочерние элементы.
// contentEl.appendChild(clone): Этот метод добавляет клонированный элемент в конец дочерних элементов узла contentEl.













// addEl.addEventListener("click", () => {

//   console.log("work");
//   titleEl.innerHTML =
//     ` <div class="box">1</div>
  
//   ` ;
// });


