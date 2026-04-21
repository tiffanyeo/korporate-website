
// UTILS
import { startClock } from "./utils/time.js";
import { playAudio } from "./utils/playAudio.js";

// FEATURES
import { selectionMarking } from "./features/selectionMarking/selectionMarking.js";


function init() {
    // playAudio.loading();
    selectionMarking();
    startClock();
}


// eListeners
const loadingAudioBtn = document.querySelector(".loadingAudio");
loadingAudioBtn.addEventListener("click", () => {
    playAudio.loading();
});
const errorAudioBtn = document.querySelector(".errorAudio");
errorAudioBtn.addEventListener("click", () => {
    playAudio.error();
});


// Initialize
addEventListener("DOMContentLoaded", (e) => {
    init();
})
