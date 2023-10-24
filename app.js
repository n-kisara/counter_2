'use strict';

const keyUp = () => {
    let src = mainText.value;
    let num = 10 - src.length;
    
    const count = document.getElementById('count');
    count.textContent = num;

    if(num > 0) {
        count.style.color="black";
    } else {
        count.style.color="red";
    }
}
const mainText = document.getElementById('main_text');

mainText.addEventListener('keyup',keyUp);