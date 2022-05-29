import { settings } from "./settings.js";
import {
  cardFrontArr,
  createCard,
  shuffle,
  cardsContainer,
  youWin,
  updateScore,
} from "./uglyCode.js";

//SHUFFLE ARRAY
const shuffledArr = [...cardFrontArr];

shuffle(shuffledArr);

let gameBoard;
if (settings.difficulty === "easy") {
  gameBoard = shuffledArr.slice(0, 3);
  cardsContainer.className = "cards easy-layout";
} else if (settings.difficulty === "normal") {
  gameBoard = shuffledArr.slice(0, 6);
  cardsContainer.className = "cards normal-layout";
} else if (settings.difficulty === "hard") {
  gameBoard = shuffledArr.slice(0, 9);
  cardsContainer.className = "cards hard-layout";
}

gameBoard.forEach((element) => gameBoard.push(element));

shuffle(gameBoard);

//CREATE EACH CARD
gameBoard.forEach((element) => {
  if (settings.difficulty === "easy" || settings.difficulty === "normal")
    createCard(element, "easy");
  if (settings.difficulty === "hard") createCard(element, "hard");
});

// FLIP
const cards = document.querySelectorAll(".card");
let tempPair = [];
let solvedCards = [];
const scoreDisplay = document.querySelector(".scoreNum");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.className.includes("flipped") && !settings.isGameOver) {
      card.classList.toggle("flipped");

      //CHECK IF CARDS ARE FLIPPED & ADD TO EMPTY ARRAY
      if (tempPair.length < 2) {
        tempPair.push(card);
      }
      //CHECK IF 2 CARDS IN ARRAY ARE A MATCH
      if (
        tempPair.length === 2 &&
        tempPair[0].firstElementChild.src === tempPair[1].firstElementChild.src
      ) {
        solvedCards.push(tempPair[0], tempPair[1]);

        updateScore("match", settings, scoreDisplay);
        youWin(settings, solvedCards, scoreDisplay);

        tempPair = [];
      }
      //IF THEY ARE NOT THE SAME DO THIS
      else if (
        tempPair.length === 2 &&
        tempPair[0].firstElementChild.src !== tempPair[1].firstElementChild.src
      ) {
        let prevPair = [...tempPair];
        setTimeout(() => {
          prevPair[0].classList.toggle("flipped");
          prevPair[1].classList.toggle("flipped");
        }, 500);

        tempPair = [];
        updateScore("no-match", settings, scoreDisplay);
      }
    }
  });
});
