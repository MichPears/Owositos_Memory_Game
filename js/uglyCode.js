import { giveUpBtn, stopTimer, timeLeft } from "./game_settings.js";
import { settings } from "./settings.js";

// IMAGE ARRAY
const cardFrontArr = [
  "./images/owosito_images/owo1.png",
  "./images/owosito_images/owo2.png",
  "./images/owosito_images/owo3.png",
  "./images/owosito_images/owo4.png",
  "./images/owosito_images/owo5.png",
  "./images/owosito_images/owo6.png",
  "./images/owosito_images/owo7.png",
  "./images/owosito_images/owo8.png",
  "./images/owosito_images/owo9.png",
  "./images/owosito_images/owo10.png",
];

//CREATE CARD FUNCTION
const cardsContainer = document.querySelector(".cards");

const createCard = (element, difficulty) => {
  const card = document.createElement("div");
  card.innerHTML = `
              <img
              class="front f1"
              src="${element}"
              alt="${element}"
              />
              <img
              class="back"
              src="./images/owosito_images/card-back.png"
              alt="cardBack"
              />`;
  cardsContainer.appendChild(card);

  card.className = `card ${difficulty}`;
};

//SHUFFLE FUNC
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const youWinSign = document.querySelector(".you-win");

//FUNC TO CHECK IF YOU WIN
const youWin = (settings, solvedCards, scoreDisplay) => {
  if (
    (settings.difficulty === "easy" && solvedCards.length === 6) ||
    (settings.difficulty === "normal" && solvedCards.length === 12) ||
    (settings.difficulty === "hard" && solvedCards.length === 18)
  ) {
    youWinSign.classList.toggle("hidden");
    settings.isGameOver = true;
    giveUpBtn.innerHTML = "Next";
    stopTimer();
    if (settings.difficulty === "easy" && settings.timedMode)
      updateScore("easy", settings, scoreDisplay);
    if (settings.difficulty === "normal" && settings.timedMode)
      updateScore("normal", settings, scoreDisplay);
    if (settings.difficulty === "hard" && settings.timedMode)
      updateScore("hard", settings, scoreDisplay);
    if (settings.isGameOver && !settings.timedMode)
      updateScore("", settings, scoreDisplay);
  }
};

//SCORE FUNC

const postHighscore = (settings) => {
  const data = {
    score: {
      username: settings.username,
      difficulty: settings.difficulty,
      timed_mode: settings.timedMode,
      score: settings.score,
    },
  };
  try {
    fetch("https://owosito-scoreboard-api.herokuapp.com/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

const updateScore = (match, settings, scoreDisplay) => {
  if (match === "match") settings.score = settings.score + 5;
  if (match === "no-match") settings.score = settings.score - 2;
  if (match === "easy") settings.score = settings.score + timeLeft;
  if (match === "normal") settings.score = settings.score + timeLeft;
  if (match === "hard") settings.score = settings.score + timeLeft;
  if (settings.isGameOver) {
    postHighscore(settings);
  }

  scoreDisplay.innerHTML = settings.score;
  localStorage.setItem("settings", JSON.stringify(settings));
};

export {
  cardFrontArr,
  createCard,
  shuffle,
  cardsContainer,
  youWin,
  updateScore,
};
