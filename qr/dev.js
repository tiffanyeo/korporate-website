const container = document.querySelector("#container")
// EVENT-LISTEBER
const btnTrashCan = document.querySelector(".choice1");
btnTrashCan.addEventListener("click", () => {
    // load html 1
    window.location.href = "choice1.html";
})

const btnMailBox = document.querySelector(".choice2");
btnMailBox.addEventListener("click", () => {
    // load html 2
    window.location.href = "choice2.html";
})
