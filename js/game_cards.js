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
let tempPair = [];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    //CHECK IF CARDS ARE FLIPPED & ADD TO EMPTY ARRAY
    if (card.className.includes("flipped") && tempPair.length < 2) {
      tempPair.push(card);
      console.log(tempPair);
      //CHECK IF 2 CARDS IN ARRAY ARE THE SAME
      if (
        tempPair.length === 2 &&
        tempPair[0].firstElementChild.src === tempPair[1].firstElementChild.src
      ) {
        tempPair[0].classList.add("found");
        tempPair[1].classList.add("found");
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
      }
    }
  });
});
