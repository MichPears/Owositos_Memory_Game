import { setSettings, settings } from "./settings.js";

// LOAD SETTINGS
setSettings();
const username = document.querySelector(".username");

if (settings === null) username.value = "";
else username.value = settings.username;
//LOAD SERVER
fetch("https://owosito-scoreboard-api.herokuapp.com/scores");
