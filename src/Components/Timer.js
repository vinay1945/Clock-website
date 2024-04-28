// const { Timer } = require("lucide");

const displayHoursValue = document.querySelector("#displayHoursValue");
const hoursValueUp = document.querySelector("#hoursValueUp");
const hoursValueDown = document.querySelector("#hoursValueDown");
let setHoursValue = 0;

function updateHoursValue(increment) {
  if (increment && setHoursValue < 99) {
    setHoursValue++;
  } else if (!increment && setHoursValue > 0) {
    setHoursValue--;
  }

  displayHoursValue.innerHTML = setHoursValue.toString().padStart(2, "0");
}

hoursValueUp.addEventListener("click", () => {
  updateHoursValue(true);
});

hoursValueDown.addEventListener("click", () => {
  updateHoursValue(false);
});

const minutesValueUp = document.querySelector("#minutesValueUp");
const minutesValueDown = document.querySelector("#minutesValueDown");
const displayMinutesValue = document.querySelector("#displayMinutesValue");
let setMinutesValue = 0;

function updateMinutesValue(increment) {
  if (increment && setMinutesValue < 59) {
    setMinutesValue++;
  } else if (!increment && setMinutesValue > 0) {
    setMinutesValue--;
  }

  displayMinutesValue.innerHTML = setMinutesValue.toString().padStart(2, "0");
}

minutesValueUp.addEventListener("click", () => {
  updateMinutesValue(true);
});

minutesValueDown.addEventListener("click", () => {
  updateMinutesValue(false);
});

const secondValueUp = document.querySelector("#secondValueUp");
const secondValueDown = document.querySelector("#secondValueDown");
const displaySecondValue = document.querySelector("#displaysecondValue");
let setSecondValue = 0;

function updateSecondValue(increment) {
  if (increment && setSecondValue < 59) {
    setSecondValue++;
  } else if (!increment && setSecondValue > 0) {
    setSecondValue--;
  }

  displaySecondValue.innerHTML = setSecondValue.toString().padStart(2, "0");
}

secondValueUp.addEventListener("click", () => {
  updateSecondValue(true);
});

secondValueDown.addEventListener("click", () => {
  updateSecondValue(false);
});

const displayHours = document.querySelector("#displayHours");
const displayMinutes = document.querySelector("#displayMinutes");
const displaySeconds = document.querySelector("#displaySeconds");
const displayTimer = document.querySelector("#displayTimer");
const arrTimers = [];

const setTimer = document.querySelector("#setTimer");

setTimer.addEventListener("click", () => {
  // arrTimers.push(TimersFunction)
  displayHours.innerHTML = setHoursValue.toString().padStart(2, "0");
  displayMinutes.innerHTML = setMinutesValue.toString().padStart(2, "0");
  displaySeconds.innerHTML = setSecondValue.toString().padStart(2, "0");
  
  displayTimer.classList.remove("hidden");
  displayTimer.classList.add("flex");
});


const StartBtn = document.querySelector("#start-btn");
const StopBtn = document.querySelector("#pause-btn");
const ReSetBtn = document.querySelector("#reset-btn");
let isinterval;
let isRunning = false;

function startfunction() {
  if (!isRunning) {
    isinterval = setInterval(updataTime, 1000);
    isRunning = true;
  }
  StartBtn.classList.add("hidden");
  StopBtn.classList.remove("hidden");
  StopBtn.classList.add("flex");
}

function stopfunction() {
  clearInterval(isinterval);
  isRunning = false;
  StopBtn.classList.remove('flex')
  StartBtn.classList.remove('hidden')
  StartBtn.classList.add('flex')
  StopBtn.classList.add('hidden')
}
function resetfunction() {
  clearInterval(isinterval);
  updataDisplay();
}

function updataTime() {
  setSecondValue--;
  if (setSecondValue === 0) {
    setSecondValue = 59;
    setMinutesValue--;
  }
  if (setMinutesValue === 0) {
    setMinutesValue = 0;
    setHoursValue--
  }
  updataDisplay();
}

function updataDisplay() {
  document.querySelector("#displayHours").innerHTML = `${hours
    .toString()
    .padStart(2, "0")}:`;
  document.querySelector("#displayMinutes").innerHTML = `${minutes
    .toString()
    .padStart(2, "0")}:`;
  document.querySelector("#displaySeconds").innerHTML = second
    .toString()
    .padStart(2, "0");
}

StartBtn.addEventListener("click", startfunction);
StopBtn.addEventListener("click", stopfunction);
ReSetBtn.addEventListener("click", resetfunction);