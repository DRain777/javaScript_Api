// на странице есть мписок элеменнтов , каждый который имеет атрибут data-rating, содержащий рейтинг товара, создайте функцию которая сортирует элементы в порядке убывния рейтинга и переставляет их на странице в соответствии с новым порядком.



// const sortElementsByDataAtribute = attributeNme => {
//     const rating = document.querySelector('.raiting');
//     const elements = Array.from(rating.document.querySelectorAll(`[${attributeNme}]`));
//     elements.sort((a,b) =>{
//         const raitingA = parseInt(a.getAttribute(attributeNme));
//         const raitingB = parseInt(b.getAttribute(attributeNme));
//         return raitingB - raitingA
//     });

//     elements.forEach(Element =>{
//         rating.appendChild(Element);
//     });
// };






// Объявление функции sortElementsByDataAtribute, которая принимает имя атрибута
const sortElementsByDataAtribute = attributeNme => {
    // Находим элемент с классом 'raiting' в документе
    const rating = document.querySelector('.raiting');
    // Получаем список элементов, у которых есть определенный атрибут
    const elements = Array.from(rating.document.querySelectorAll(`[${attributeNme}]`));
    // Сортируем элементы в массиве по значению атрибута (в порядке убывания)
    elements.sort((a, b) => {
        const raitingA = parseInt(a.getAttribute(attributeNme)); // Получаем значение атрибута для элемента a
        const raitingB = parseInt(b.getAttribute(attributeNme)); // Получаем значение атрибута для элемента b
        return raitingB - raitingA; // Возвращаем разницу между значениями (для сортировки по убыванию)
    });

    // Перебираем отсортированные элементы и добавляем их в рейтинг
    elements.forEach(Element => {
        rating.appendChild(Element);
    });
};


sortElementsByDataAtribute("data-rating");


