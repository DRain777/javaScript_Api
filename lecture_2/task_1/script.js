// на странице есть список элементов каждый который имеет атрибут data-price, содержащий цену товара Создайте Функцию которая принимает максимальную цен и скрывает все элементы с ценой выше указанного значения.

// const filterElementByDataAttribute = (atributeName,maxPrice) => {
//     const elements = Array.from(document.querySelectorAll(`[${atributeName}]`));
//     elements.forEach(element => {
//         const price = parseFloat(element.getAttribute(atributeName));
//         if(price > maxPrice) {
//             element.style.display = 'none';
//         }

//     });
// };
// // Пример использования 
// filterElementByDataAttribute("data-price", 50);


// Объявление функции filterElementByDataAttribute с двумя параметрами: atributeName и maxPrice
const filterElementByDataAttribute = (atributeName, maxPrice) => {
    // Получаем все элементы, которые имеют указанный атрибут (в данном случае, используем atributeName)
    const elements = Array.from(document.querySelectorAll(`[${atributeName}]`));
    
    // Итерируемся по каждому найденному элементу
    elements.forEach(element => {
        // Получаем значение цены из атрибута указанного в atributeName и преобразуем его в число с плавающей точкой
        const price = parseFloat(element.getAttribute(atributeName));
        
        // Проверяем, если цена элемента больше, чем максимальная цена (maxPrice), то скрываем этот элемент
        if (price > maxPrice) {
            element.style.display = 'none'; // Скрытие элемента через стиль CSS
        }
    });
};

// Пример использования функции filterElementByDataAttribute
filterElementByDataAttribute("data-price", 50); // Вызываем функцию с указанием атрибута "data-price" и максимальной цены 50
