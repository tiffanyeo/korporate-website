import { StartMenu } from "./start-menu.js"

export class FooterElem extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        this.startClock();
    }

    startClock() {
        const clockEl = this.shadowRoot.querySelector("#clock");

        const update = () => {
            const now = new Date();
            clockEl.textContent = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
        }
        update();
        this.interval = setInterval(update, 1000);
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    box-sizing: border-box;
                    overflow: clip;
                    margin: 0;
                    padding: 0;
                }

                .footer-elem{
                    margin: 0;
                    width: 100%;
                    height: 40px;
                    background-color: rgb(30, 96, 232);
                    background: linear-gradient(180deg,
                        rgba(9, 151, 255, 1) 0%,
                        rgba(0, 83, 238, 1) 8%,
                        rgba(0, 80, 238, 1) 40%,
                        rgba(0, 102, 255, 1) 88%,
                        rgba(0, 102, 255, 1) 93%,
                        rgba(0, 91, 255, 1) 95%,
                        rgba(0, 61, 215, 1) 96%,
                        rgba(0, 61, 215, 1) 100%);
                    box-sizing: border-box;

                    display: flex;
                    justify-content: space-between;
                }

                .footer-left{
                    display: flex;
                    margin: 0;
                    padding: 0px;
                }
                .footer-right{
                    display: flex;
                    padding: 4px;
                    align-items: center;
                    justify-content: space-around;
                    width: 90px;
                    border-radius: 2px 0 0 2px;
                    border-left: 2px groove rgba(25, 183, 246, 0.64);

                    box-shadow:
                        0 -2px 4px rgba(0,0,0,0.4),
                        inset 0px 12px 4px rgb(25, 185, 246);
                    background: linear-gradient(180deg,
                    rgb(11, 160, 234) 0%,
                    rgb(0, 133, 219) 8%,
                    rgb(0, 133, 219) 40%,
                    rgb(0, 133, 219) 88%,
                    rgb(0, 133, 219)93%,
                    rgb(0, 133, 219) 95%,
                    rgb(1, 113, 187) 96%,
                    rgb(1, 113, 187) 100%);
                    
                    color: white;
                    font-size: 14px;
                    font-weight: 500;
                }
                .footer-icon {
                    width: 20px;
                    height: 20px;
                }
            </style>

            <div class="footer-elem">
                <div class="footer-left">
                    <start-menu></start-menu>
                </div>
                <div class="footer-right">
                    <img class="footer-icon" src="/views/remoteDesktop/assets/icons/antivirus.png">
                    <span id="clock">00:00</span>
                </div>
            </div>
        `;
    }
}

customElements.define("footer-elem", FooterElem);