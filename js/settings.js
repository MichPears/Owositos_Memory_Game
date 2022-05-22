const userInput = document.querySelector(".username");
const diffSelect = document.querySelector(".difficulty-select");
const timedModeCheck = document.querySelector(".timed-option input");
const startBtn = document.querySelector(".start-a-tag");

const settings = () => {
  if (startBtn !== null) {
    startBtn.addEventListener("click", () => {
      let settings = {
        username: userInput.value,
        difficulty: diffSelect.value,
        timedMode: timedModeCheck.checked,
      };
      localStorage.setItem("settings", JSON.stringify(settings));
    });
  }
};
export default settings;
