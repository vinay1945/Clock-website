let hours = 0;
let minutes = 0;
let second = 0;
let isinterval;
let isRunning = false;
const StartBtn = document.querySelector("#start-btn");
const StopBtn = document.querySelector("#pause-btn");
const ReSetBtn = document.querySelector("#reset-btn");

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
  hours = 0;
  minutes = 0;
  second = 0;
  updataDisplay();
}

function updataTime() {
  second++;
  if (second === 60) {
    second = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  //   console.log(second);
  //   console.log(minutes);
  updataDisplay();
}

function updataDisplay() {
  document.querySelector("#hours").innerHTML = `${hours
    .toString()
    .padStart(2, "0")}:`;
  document.querySelector("#minutes").innerHTML = `${minutes
    .toString()
    .padStart(2, "0")}:`;
  document.querySelector("#second").innerHTML = second
    .toString()
    .padStart(2, "0");
}

StartBtn.addEventListener("click", startfunction);
StopBtn.addEventListener("click", stopfunction);
ReSetBtn.addEventListener("click", resetfunction);

updataDisplay();
