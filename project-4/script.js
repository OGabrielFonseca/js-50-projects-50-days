const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener('click', () => {
    input.classList.toggle('active');
    button.classList.toggle('active');
    input.focus();
})