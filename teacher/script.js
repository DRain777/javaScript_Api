const titleEl = document.querySelector('.title');
// console.log(titleEl);
titleEl.textContent = "Все и сразу"

const buttonEl = document.querySelector('.button');
const inputEl = document.querySelector('.input');



// buttonEl.onclick = function() {
//     alert("здорова")
// }

buttonEl.addEventListener('click', function (e) {
    alert('hello new js')
});


buttonEl.addEventListener("click",  (e) => {
  alert("hello new js");
});

// inputEl.addEventListener('input', function (e) {
//     console.log(inputEl.Value);
// });

buttonEl.addEventListener('click', () =>   {
titleEl.textContent = inputEl.value
} );




buttonEl.addEventListener("click", () => {
  titleEl.innerHTML = `код html
  
  `
});




