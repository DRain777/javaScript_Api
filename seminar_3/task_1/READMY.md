Задание 1 (тайминг 35 минут)
Вы разрабатываете интернет-магазин и хотите добавить
функциональность динамического фильтрации товаров по
категориям. У вас есть форма с выпадающим списком (select), в
котором пользователь может выбрать категорию товаров. При выборе
категории товаров, необходимо динамически обновлять список
отображаемых товаров на странице, чтобы пользователь видел
только товары из выбранной категории.
1. Создайте интерфейс веб-страницы, который включает в себя
следующие элементы:
a. Выпадающий список (select) с категориями товаров.
b. Список товаров, который будет отображать товары в
соответствии с выбранной категорией.
c. Каждый товар в списке должен содержать название и
категорию.
2. Используйте HTML для создания элементов  интерфейса.



Задание 1 (продолжение)
1. Используйте JavaScript для обработки событий:
○ При выборе категории товаров в выпадающем списке, форма
должна следить за изменениями.
○ Динамически обновите список товаров на странице, чтобы
отображать только товары из выбранной категории.
2. Создайте объекты товаров и их категорий для имитации данных магазина.
3. Стилизуйте элементы интерфейса с помощью CSS для улучшения
внешнего вида.









Конечно, давайте разберём этот код построчно:

javascript
Copy code
// Функция для отображения товаров в зависимости от выбранной категории
function renderProducts(category) {
    // Очищаем список товаров перед добавлением новых
    productList.innerHTML = "";

    // Получаем соответствующий массив товаров в зависимости от выбранной категории
    const products = category === "elec" ? arrayElecronik : arrayBit;

    // Создаем элементы списка товаров и добавляем их на страницу
    products.forEach((product) => {
        const listItem = document.createElement("li"); // Создаем новый элемент списка
        listItem.textContent = product; // Устанавливаем текст элемента равным названию товара
        productList.appendChild(listItem); // Добавляем элемент списка в список товаров
    });
}
renderProducts(category) - это функция, которая отображает товары в зависимости от выбранной категории. Она принимает в качестве аргумента category, который является строкой, указывающей на выбранную категорию ("elec" для электроники или "bit" для бытовой техники).

productList.innerHTML = "" - это строка, которая очищает содержимое списка товаров (productList), устанавливая его в пустую строку. Это нужно для того, чтобы удалить предыдущие элементы списка перед добавлением новых.

const products = category === "elec" ? arrayElecronik : arrayBit; - это тернарный оператор, который выбирает соответствующий массив товаров в зависимости от выбранной категории. Если category равно "elec", то переменная products будет равна массиву arrayElecronik, иначе она будет равна массиву arrayBit.

products.forEach((product) => {...}); - это метод массива forEach, который перебирает все элементы массива products. В данном случае, для каждого товара в массиве products создается новый элемент списка (listItem), текст которого устанавливается равным названию товара, и затем этот элемент добавляется в список товаров (productList) с помощью метода appendChild().




