
// UTILS
import { startClock } from "./utils/time.js";
import { playAudio } from "./utils/playAudio.js";

// FEATURES
import { FooterElem } from "./components/footer-elem/footer-elem.js"
import { selectionMarking } from "./features/selectionMarking/selectionMarking.js";
import { NotesApp } from "./components/notes/notes.js";


function init() {
    playAudio.loading();
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
