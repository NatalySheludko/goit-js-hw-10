import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userDate = 0;

const dateInput = document.querySelector("#datetime-picker");
const startClick = document.querySelector("[data-start]");
const clockDays = document.querySelector("[data-days]");
const clockHours = document.querySelector("[data-hours]");
const clockMinutes = document.querySelector("[data-minutes]");
const clockSeconds = document.querySelector("[data-seconds]");

startClick.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
   const userSelectedDate = selectedDates[0];
    userDate = userSelectedDate.getTime();

    if (userDate < new Date()) {
      startClick.disabled = true;
      iziToast.show({
        position: "topRight",
        close: false,
        messageColor: "white",
        backgroundColor: "#ff544b",
        message: "❌ Please choose a date in the future",
      });
    } else {
      startClick.disabled = false;
    }
  },
};

flatpickr("input#datetime-picker", options);

startClick.addEventListener("click", () => {
  startClick.disabled = true;
  dateInput.disabled = true;

  const intervalId = setInterval(() => {
    const diff = userDate - Date.now();
    const time = convertMs(diff);

    addLeadingZero(time);

    if (diff < 1000) {
      clearInterval(intervalId);
      dateInput.disabled = false;
    }
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(time) {
  clockDays.textContent = time.days.toString().padStart(2, "0");
  clockHours.textContent = time.hours.toString().padStart(2, "0");
  clockMinutes.textContent = time.minutes.toString().padStart(2, "0");
  clockSeconds.textContent = time.seconds.toString().padStart(2, "0");
}
