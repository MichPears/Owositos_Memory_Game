import { settings } from "./settings.js";

// USERNAME
const username = document.querySelector(".game_username");

username.innerHTML = settings.username.toUpperCase();

//TIMER
const timerDisplay = document.querySelector(".game_timer");
const showTime = document.querySelector(".time-display");

let timer;
let timeLeft;
if (settings.difficulty === "easy") {
  timeLeft = 60; // seconds
} else if (settings.difficulty === "normal") {
  timeLeft = 30;
} else if (settings.difficulty === "hard") {
  timeLeft = 10;
}

// What to do when the timer runs out
function gameOver() {
  // This cancels the setInterval, so the updateTimer stops getting called
  clearInterval(timer);
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if (timeLeft >= 0) {
    timerDisplay.innerHTML = timeLeft;
  } else {
    gameOver();
  }
}
function startTimer() {
  // setInterval is a built-in function that will call the given function
  timer = setInterval(updateTimer, 1000);
  updateTimer();
}

if (settings.timedMode) {
  startTimer();
} else {
  showTime.style.display = "none";
}
