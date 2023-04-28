const body = document.getElementById('body');
const text = document.getElementById('text');
let count = 0;
const interval = setInterval(handler, 30);


function handler() {
    count++;
    text.innerText = `${count}%`

    if (count > 99) clearInterval(interval);
    
    text.style.opacity = `${1 - count / 100}`
    body.style.setProperty('--blur', `${30 - count / 3.33}px`)
}