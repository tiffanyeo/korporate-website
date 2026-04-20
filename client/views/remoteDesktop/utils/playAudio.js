
export const playAudio = {

    loading() {
        const loadingAudio = document.getElementById("loadingAudio");
        loadingAudio.play();
    },

    error() {
        const errorAudio = document.getElementById("errorAudio");
        errorAudio.play();
    }
    
}