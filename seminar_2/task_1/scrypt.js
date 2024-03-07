

// Добавляем обработчик события "mouseover" для элемента <ul>
document.querySelector('ul').addEventListener('mouseover', (e) => {
    // Проверяем, является ли целевой элемент ссылкой (<a>)
    if (e.target.tagName === "a") {
        // Если целевой элемент - ссылка, меняем его фоновый цвет на #f0f0f0
        e.target.style.backgroundColor = "#f0f0f0";
    }
});

// Добавляем обработчик события "mouseout" для элемента <ul>
document.querySelector('ul').addEventListener('mouseout', (e) => {
    // Проверяем, является ли целевой элемент ссылкой (<a>)
    if (e.target.tagName === "a") {
        // Если целевой элемент - ссылка, меняем его фоновый цвет на #ffffff
        e.target.style.backgroundColor = "#ffffff";
    }
});

// Добавляем обработчик события "click" для элемента <ul>
document.querySelector('ul').addEventListener('click', (e) => {
    // Отменяем стандартное действие по умолчанию для ссылок (переход по ссылке)
    e.preventDefault();

    // Получаем текущий активный элемент
    const activeEl = document.querySelector('.active');

    // Если активный элемент существует, удаляем у него класс "active"
    if (activeEl) {
        activeEl.classList.remove("active");
    }

    // Если целевой элемент является ссылкой (<a>), добавляем ему класс "active"
    if (e.target.tagName === "A") {
        e.target.classList.add("active");
    }
});
