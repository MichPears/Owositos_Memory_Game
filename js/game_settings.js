import { settings } from "./settings.js";

//NO SETTINGS
if (settings === null) window.location.href = "index.html";
if (settings.isGameOver) window.location.href = "index.html";

// USERNAME
const username = document.querySelector(".game_username");

username.innerHTML = settings.username.toUpperCase();

//TIMER
const timerDisplay = document.querySelector(".game_timer");
const showTime = document.querySelector(".time-display");
const youLoseSign = document.querySelector(".you-lose");

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
function youLose() {
  // This cancels the setInterval, so the updateTimer stops getting called
  clearInterval(timer);
  youLoseSign.classList.toggle("hidden");
  settings.isGameOver = true;
  localStorage.setItem("settings", JSON.stringify(settings));
}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if (timeLeft >= 0) {
    timerDisplay.innerHTML = timeLeft;
  } else {
    youLose();
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

const stopTimer = () => {
  clearInterval(timer);
};

//GIVE UP BUTTON
const giveUpBtn = document.querySelector(".end-btn");
const areYouSureSign = document.querySelector(".are-you-sure");
const continueBtn = document.querySelector(".no");

giveUpBtn.addEventListener("click", () => {
  if (!settings.isGameOver) {
    areYouSureSign.classList.toggle("hidden");
  } else {
    window.location.href = "scoreboard.html";
  }
});

continueBtn.addEventListener("click", () =>
  areYouSureSign.classList.toggle("hidden")
);

export { giveUpBtn, stopTimer, timeLeft };
