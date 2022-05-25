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

export { cardFrontArr, createCard, shuffle, cardsContainer };
