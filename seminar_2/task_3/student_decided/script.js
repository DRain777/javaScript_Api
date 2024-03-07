const button = document.querySelector('.button');
if(button) {
    button.addEventListener('click',(e) => {
        if(e.isTrusted) {
            e.target.textContent = "товар добавлен в корзину";
            setTimeout(() =>{
                e.target.textContent = 'Buy'
            },2000);
        }

    });
}

window.addEventListener('load', () => {
    if (getLastPartofurl(window.location.href) === 'product.html') {
        setTimeout(() => {
            history.back();
        },2000);
    }
});



function getLastPartofurl(url) {
    const parts = url.split('/');
    return paarts.at(-1);
}