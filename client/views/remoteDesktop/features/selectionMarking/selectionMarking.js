
export function selectionMarking() {

    const markingBox = document.getElementById("selectMarking");
    const main = document.querySelector("main");

    let startX = 0;
    let startY = 0;
    let isSelectingNow = false;

    // MOBILE
    document.addEventListener("pointerdown", (e) => {

        // Ignore if mouse
        if (e.pointerType === "mouse" && e.button !== 0) return;

        isSelectingNow = true;

        // Start from main instead of whole window
        const rect = main.getBoundingClientRect();

        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;

        markingBox.style.display = "block";
        markingBox.style.left = `${startX}px`;
        markingBox.style.top = `${startY}px`;
        markingBox.style.width = "0px";
        markingBox.style.height = "0px";
        
    });

    document.addEventListener("pointermove", (e) => {
        
        if (!isSelectingNow) return;

        // Start from main instead of whole window
        const rect = main.getBoundingClientRect();

        const nowX = e.clientX - rect.left;
        const nowY = e.clientY - rect.top;

        const width = nowX - startX;
        const height = nowY - startY;

        markingBox.style.left = (width < 0 ? nowX : startX) + "px";
        markingBox.style.top = (height < 0 ? nowY : startY) + "px";
        markingBox.style.width = Math.abs(width) + "px";
        markingBox.style.height = Math.abs(height) + "px";
        
    });

    document.addEventListener("pointerup", () => {
        isSelectingNow = false;
        markingBox.style.display = "none";
    });

    // DESKTOP
    document.addEventListener("mousedown", (e) => {

        // Start from main instead of whole window
        const rect = main.getBoundingClientRect();

        isSelectingNow = true;

        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;

        markingBox.style.display = "block";
        markingBox.style.left = `${startX}px`;
        markingBox.style.top = `${startY}px`;
        markingBox.style.width = "0px";
        markingBox.style.height = "0px";
    });

    document.addEventListener("mousemove", (e) => {

        if (!isSelectingNow) return;

        // Start from main instead of whole window
        const rect = main.getBoundingClientRect();

        const nowX = e.clientX - rect.left;
        const nowY = e.clientY - rect.top;

        const width = nowX - startX;
        const height = nowY - startY;

        markingBox.style.left = (width < 0 ? nowX : startX) + "px";
        markingBox.style.top = (height < 0 ? nowY : startY) + "px";
        markingBox.style.width = Math.abs(width) + "px";
        markingBox.style.height = Math.abs(height) + "px";

    });
    
    document.addEventListener("mouseup", () => {
        if (!isSelectingNow) return;

        isSelectingNow = false;
        markingBox.style.display = "none";
    });

}