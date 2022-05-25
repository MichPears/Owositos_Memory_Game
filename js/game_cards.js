import { settings } from "./settings.js";
import {
  cardFrontArr,
  createCard,
  shuffle,
  cardsContainer,
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

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
