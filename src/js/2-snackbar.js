import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let timeDelay = null;
const timeInterval = document.querySelector('[name="delay"]');
timeInterval.addEventListener("input", () => {
  timeDelay = timeInterval.value;
});

let selectedState = null;
const radioState = document.querySelectorAll('[name="state"]');
radioState.forEach(radio => {
  radio.addEventListener("change", () => {
    selectedState = radio.value;
  });
});

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      selectedState === "fulfilled" ? resolve() : reject();
    }, timeDelay);
  });
}

function onFulfilled() {
  iziToast.show({
    messageColor: "white",
    backgroundColor: "#34c683",
    position: "topRight",
    close: false,
    message: `✅ Fulfilled promise in ${timeDelay} ms`,
  });
}

function onRejected() {
  iziToast.show({
    messageColor: "white",
    backgroundColor: "#ff544b",
    position: "topRight",
    close: false,
    message: `❌ Rejected promise in ${timeDelay} ms`,
  });
}

const submitData = document.querySelector("form");
submitData.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  createPromise().then(onFulfilled).catch(onRejected);

  submitData.reset();
}
