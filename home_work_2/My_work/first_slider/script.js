// Получаем ссылку на кнопку "Влево"
const arrowLeft = document.querySelector(".arrow-left");
// Получаем ссылку на кнопку "Вправо"
const arrowRight = document.querySelector(".arrow-right");
// Получаем ссылки на все слайды (коллекция)
const slides = document.querySelectorAll(".sliderImage");
// Получаем ссылку на блок пагинации (предполагаю, что это нижний блок)
const bottom = document.querySelector("#bottom");
// Инициализируем переменную, отслеживающую текущий индекс слайда
let currentSliderIndex = 0;
// Массив для хранения ссылок на кружки пагинации
const paginationCircles = [];

// Функция для отображения слайда
function showSlider() {
  // Добавляем класс "block" к текущему слайду для отображения
  slides[currentSliderIndex].classList.add("block");
}

// Функция для скрытия слайда
function hideSlide() {
  // Удаляем класс "block" у текущего слайда для скрытия
  slides[currentSliderIndex].classList.remove("block");
}

// Функция для переключения на следующий слайд
function nextSlide() {
  // Скрываем текущий слайд
  hideSlide();

  removeActiveClass();
  // Увеличиваем индекс текущего слайда на 1
  currentSliderIndex++;
  // Если достигнут конец коллекции слайдов, переходим на начало
  if (currentSliderIndex > slides.length - 1) {
    currentSliderIndex = 0;
  }
  // Отображаем новый текущий слайд
  showSlider();
  // Обновляем состояние пагинации
  updatePagination();
}

// Функция для переключения на предыдущий слайд
function previosSlide() {
  // Скрываем текущий слайд
  hideSlide();

  removeActiveClass();
  // Уменьшаем индекс текущего слайда на 1
  currentSliderIndex--;
  // Если достигнут начало коллекции слайдов, переходим в конец
  if (currentSliderIndex < 0) {
    currentSliderIndex = slides.length - 1;
  }
  addActiveClass();
  // Отображаем новый текущий слайд
  showSlider();
  // Обновляем состояние пагинации
  updatePagination();
}

// Добавляем обработчик события клика на кнопку "Вправо"
arrowRight.addEventListener("click", nextSlide);
// Добавляем обработчик события клика на кнопку "Влево"
arrowLeft.addEventListener("click", previosSlide);

// Функция для создания кружков пагинации
function createPaginationCircles() {
  const div = document.createElement("div");
  div.className = "pagination_circle"; // Исправлено на "pagination_circle"
  bottom.appendChild(div);
  paginationCircles.push(div);
}

// Функция для обновления состояния пагинации
function updatePagination() {
  paginationCircles.forEach((circle, index) => {
    if (index === currentSliderIndex) {
      circle.classList.add("active"); // Добавляем класс активного кружка
    } else {
      circle.classList.remove("active"); // Удаляем класс активного кружка
    }
  });
}

// Функция для инициализации пагинации
function addPagination() {
  slides.forEach(createPaginationCircles); // Создаем кружки пагинации
  updatePagination(); // Обновляем состояние пагинации
}

// Вызываем функцию инициализации пагинации
addPagination();


function addActiveClass() {
    paginationCircles[currentSliderIndex].classList.add('active');
}



function removeActiveClass() {
  paginationCircles[currentSliderIndex].classList.remove("active");
}

