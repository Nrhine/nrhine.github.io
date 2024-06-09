window.onload = function () {
    let fontSelector = document.getElementById('font-selector');

    fontSelector.addEventListener('change', (event) => {
        document.body.style.fontFamily = event.target.value;
    });
}





console.log('hello');