
import { ClientRouter } from "../../router.js";

class QRView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.eListeners();
    }

    style() {
        return `
        #container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--color-blue-80);

        }

        .text {
            text-align: center;
        }

        .choices-container {
            margin-top: 100px;
            justify-content: center;
            display: flex;
            flex-direction: row;
            gap: 50px;
        }

        .choices {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #4988b8;
            border-radius: 10px;
            padding: 20px;
            height: 200px;
            width: 270px;
            box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.501);
        }

        .choices:hover {
            background-color: var(--color-blue-120);
        }

        .choice-icon {
            width: 150px;
        }`;
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>${this.style()}</style>
        <div id="container">
            <div class="text-info">
                <h2 class="text text-h2">Ditt sista val</h3>
                    <p class="text text-p">Vad gjorde du av brevet?</p>
            </div>

            <div class="choices-container">
                <div class="choices choice1">
                    <img src="/views/assets/icons/app-icon-lock.png" class="choice-icon" alt="">
                    <p class="btn-info-text">Jag slängde brevet i papperskorgen.</p>

                </div>
                <div class="choices choice2">
                    <img src="/views/assets/icons/app-icon-lock.png" class="choice-icon" alt="">
                    <p class="btn-info-text">Jag la brevet i brevlådan.</p>
                </div>
            </div>
        </div>
        `;
    }

    eListeners() {

        const btnTrashCan = this.shadowRoot.querySelector(".choice1");
        btnTrashCan.addEventlistener("click", () => {
            ClientRouter.setNewURL("endgame-trash-can")
        })

        const btnMailBox = this.shadowRoot.querySelector(".choice1");
        btnMailBox.addEventlistener("click", () => {
            ClientRouter.setNewURL("endgame-mail-box")
        })

    }

}

customElements.define("qr-view", QRView);