import { settings } from "./settings.js";

// FLIP
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// IMAGE ARRAY
const front1 = document.querySelector(".f1");
const front2 = document.querySelector(".f2");
const front3 = document.querySelector(".f3");
const front4 = document.querySelector(".f4");
const front5 = document.querySelector(".f5");
const front6 = document.querySelector(".f6");

const endBtn = document.querySelector(".end-btn");

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
//RANDOM NUMBER
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

front1.addEventListener("click", () => {
  console.log(getRandomInt(cardFrontArr.length));
});

//EASY IMAGES
if (settings.difficulty === "easy") {
  let easy1 = getRandomInt(cardFrontArr.length);
  let easy2 = getRandomInt(cardFrontArr.length);
  while (easy1 === easy2) {
    easy2 = getRandomInt(cardFrontArr.length);
  }
  let easy3 = getRandomInt(cardFrontArr.length);
  while (easy3 === easy2 || easy3 === easy1) {
    easy3 = getRandomInt(cardFrontArr.length);
  }

  console.log(easy1, easy2, easy3);

  //MAKING PAIRS
  const cardElements = [front1, front2, front3, front4, front5, front6];

  //FIRST PAIR
  let pair1Card1 = getRandomInt(cardElements.length);
  let pair1Card2 = getRandomInt(cardElements.length);
  while (pair1Card1 === pair1Card2) {
    pair1Card2 = getRandomInt(cardElements.length);
  }
  const firstPair = [cardElements[pair1Card1], cardElements[pair1Card2]];
  firstPair[0].src = cardFrontArr[easy1];
  firstPair[1].src = cardFrontArr[easy1];

  console.log(firstPair);
  //SECOND PAIR
  const secondCardElements = cardElements.filter((element) => {
    return firstPair[0] !== element && firstPair[1] !== element;
  });

  let pair2Card1 = getRandomInt(secondCardElements.length);
  let pair2Card2 = getRandomInt(secondCardElements.length);
  while (pair2Card1 === pair2Card2) {
    pair2Card2 = getRandomInt(secondCardElements.length);
  }
  const secondPair = [
    secondCardElements[pair2Card1],
    secondCardElements[pair2Card2],
  ];

  secondPair[0].src = cardFrontArr[easy2];
  secondPair[1].src = cardFrontArr[easy2];

  console.log(secondPair);

  //THIRD PAIR
  const thirdPair = secondCardElements.filter((element) => {
    return secondPair[0] !== element && secondPair[1] !== element;
  });

  thirdPair[0].src = cardFrontArr[easy3];
  thirdPair[1].src = cardFrontArr[easy3];
  console.log(thirdPair);
}

// console.log(cardElements.length);

// console.log(secondCardElements);

// let pair2Card1 = getRandomInt(cardElements.length);
// while (pair1Card1 === pair2Card2 || pair1Card2===pair2Card1) {    pair1Card2 = getRandomInt(cardElements.length);

// endBtn.addEventListener("click", () => {
//   console.log(easy1, easy2, easy3);
// });

// front1.src = cardFrontArr[0];
