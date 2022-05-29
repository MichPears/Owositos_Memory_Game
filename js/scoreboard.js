const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
const highscoreRow = document.querySelectorAll(".highscore-row");
const table = document.querySelector("table");

let remainder = 6 - highscores.length;

const createRow = (username, difficulty, score) => {
  const row = document.createElement("tr");

  row.innerHTML = `<tr class="highscore-row">
    <td class="table-player">${username.toUpperCase()}</td>
    <td class="table-difficulty">${difficulty.toUpperCase()}</td>
    <td class="table-score">${score}</td>
  </tr>`;

  table.appendChild(row);
};

highscores.forEach((highscore) =>
  createRow(highscore.username, highscore.difficulty, highscore.score)
);
for (let i = remainder; i >= 0; i--) createRow("Username", "Easy", "0");
