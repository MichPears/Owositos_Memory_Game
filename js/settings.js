const userInput = document.querySelector(".username");
const diffSelect = document.querySelector(".difficulty-select");
const timedModeCheck = document.querySelector(".timed-option input");
const startBtn = document.querySelector(".start-a-tag");

const setSettings = () => {
  startBtn.addEventListener("click", () => {
    let settings = {
      username: userInput.value,
      difficulty: diffSelect.value,
      timedMode: timedModeCheck.checked,
    };
    localStorage.setItem("settings", JSON.stringify(settings));
  });
};

const settings = JSON.parse(localStorage.getItem("settings"));

export { setSettings, settings };
