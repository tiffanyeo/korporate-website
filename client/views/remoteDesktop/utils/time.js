
export function startClock() {

    const timeTaskbar = document.getElementsByClassName("footer-time");

    function updateTime() {
        
        const timeNow = new Date();
        
        const h = timeNow.getHours();
        const m = timeNow.getMinutes();
        const hours = (h < 10 ? "0" : "") + h;
        const minutes = (m < 10 ? "0" : "") + m;
        
        timeTaskbar.textContent = `${hours}:${minutes}`;
        
    }

    updateTime();
    // Update time every second
    setInterval(updateTime, 1000);

}