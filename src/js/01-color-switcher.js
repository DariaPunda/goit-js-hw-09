const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

btnStart.addEventListener('click', () => {
    btnStart.disabled = true; 
    btnStop.disabled = false; 
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
   
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

btnStop.addEventListener('click', () => {
    btnStop.disabled = true; 
    btnStart.disabled = false;
    clearInterval(timerId);
});