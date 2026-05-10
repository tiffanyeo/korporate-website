export const playAudio = {
    
    loading(rootElem) {
        const loadingAudio = rootElem.getElementById("loadingAudio");
        loadingAudio.play();
    },
    error(rootElem) {
        const errorAudio = rootElem.getElementById("errorAudio");
        errorAudio.play();
    }
    
}