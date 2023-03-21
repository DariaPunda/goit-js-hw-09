import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimeEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let selectedDate = null;
let timerId = null;

const options = {

  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            window.alert('Please choose a date in the future');
        } else {
            startBtn.disabled = false;
            selectedDate = selectedDates[0];
            console.log(selectedDate);
            return;
        };

  },
};


startBtn.addEventListener('click', btnStart);

function btnStart() {
    timerId = setInterval(startTimer, 1000);
    startBtn.disabled = true;
}
    
function startTimer() {
    const timeDifference = selectedDate - new Date();

    const timeComponents = convertMs(timeDifference);
    daysEl.textContent = timeComponents.days;
    hoursEl.textContent = timeComponents.hours;
    minutesEl.textContent = timeComponents.minutes;
    secondsEl.textContent = timeComponents.seconds;
    
    if (timeDifference <= 0) {
        clearInterval(timerId);
        return;
    }
}

flatpickr(datetimeEl, options);

function addLeadingZero(value) {
   
     return String(value).padStart(2, '0');
   
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}