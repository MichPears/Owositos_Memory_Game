const highscoreRow = document.querySelectorAll(".highscore-row");
const table = document.querySelector("table");
const errSign = document.querySelector(".sb-error");

const createRow = (username, difficulty, score) => {
  const row = document.createElement("tr");

  row.innerHTML = `<tr class="highscore-row">
    <td class="table-player">${username.toUpperCase()}</td>
    <td class="table-difficulty">${difficulty.toUpperCase()}</td>
    <td class="table-score">${score}</td>
  </tr>`;

  table.appendChild(row);
};

const getHighScores = async () => {
  try {
    const res = await fetch(
      "https://owosito-scoreboard-api.herokuapp.com/scores"
    );
    const highscores = await res.json();
    return highscores;
  } catch (e) {
    errSign.classList.toggle("hidden");
  }
};

const createScoreboard = async () => {
  const highscores = await getHighScores();

  highscores.forEach((highscore) =>
    createRow(highscore.username, highscore.difficulty, highscore.score)
  );
  //THIS SETS THE SIZE OF THE SCOREBOARD TO 7
  let remainder = 6 - highscores.length;
  for (let i = remainder; i >= 0; i--) createRow("Username", "Easy", "0");
};

createScoreboard();
