import "./start-menu.js";

export class FooterElem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.startClock();
        this.eListeners();

        setTimeout(() => {
            const warning = this.shadowRoot.querySelector("#warning");
            warning.classList.add("visible");
            this.playErrorSound();
        }, 3000);

    }

    playErrorSound() {
        const host = this.getRootNode().host;
        const audio = host.shadowRoot.querySelector("#errorAudio");
        audio.currentTime = 0;
        audio.play();
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

    eListeners(){
        const bubbleBtn = this.shadowRoot.querySelector("#close-bubble");
        const bubble = this.shadowRoot.querySelector("#warning");


        bubbleBtn.addEventListener("click", () =>{
            const warning = this.shadowRoot.querySelector("#warning");
            warning.classList.remove("visible");

            setTimeout(() => {
                const host = this.getRootNode().host;
                const content = host.shadowRoot.querySelector("#content");
                const article = document.createElement("article-app");
                content.appendChild(article);
        }, 10000);

        })
        bubble.addEventListener("click", () =>{
            const warning = this.shadowRoot.querySelector("#warning");
            warning.classList.remove("visible");
            
            const host = this.getRootNode().host;
            const content = host.shadowRoot.querySelector("#content");
            const article = document.createElement("article-app");
            content.appendChild(article);
        })



    }

    

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    box-sizing: border-box;
                    overflow: clip;
                    margin: 0;
                    padding: 0;
                }

                .footer-elem {
                    user-select: none;
                    margin: 0;
                    width: 100%;
                    height: 40px;
                    z-index: 1000;
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
                #warning{
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.4s ease;
                    font-family: Tahoma;
                    position: absolute;
                    right: 45px;
                    bottom: 2px;
                    display: flex;
                    flex-direction: column;
                }
                #warning.visible{
                    opacity: 1;
                    pointer-events: auto;
                }
                #inside{
                    position: relative;
                    margin: 30px;
                    background: #fef9e5;
                    border-radius: 8px 8px 0 8px;
                    border: 0.5px solid black;
                    font-size: 10px;
                    padding: 4px 8px;
                    gap: 8px;
                    width: 200px;
                    height: fit-content;
                    color: black;
                }
                #inside p{
                    margin: 0;
                    margin-bottom: 4px;
                }

                .flex{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                img{
                    width: 12px;
                    height: 12px;
                }
                #close-bubble{
                    position:relative;
                    width: 10px;
                    height: 10px;
                    background: none repeat scroll 0 0 transparent;
                    border: 0.5px solid #B2A08C;
                    margin: 0;
                    padding: 0;
                    background-image: url(/views/assets/icons/app-icon-close-balloon.png);
                    background-size: 110%;
                    background-position: center;
                    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.2);
                    border-spacing: none;
                    border-radius: 2px;
                }
                
                #close-bubble:hover{
                    box-shadow: inset 0.5px 0.5px 0 #ffffffa0,
                            inset -0.5px -0.5px 0 #00000040;

                }
                #close-bubble .overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(178, 160, 140, 0.14);
                    opacity: 0;
                    transition: opacity 120ms ease;
                    pointer-events: none;
                }

                /* Hover-effekten */
                #close-bubble:hover .overlay {
                  opacity: 1;
                }


                .bubble-tip{
                    position: relative;
                    top: -31px;
                    left: 237px;
                    background-image: url("/views/assets/icons/bubble-tip.png");
                    background-size: contain;
                    width: 10px;
                    height: 10px;
                    background-repeat: no-repeat;
                }
            </style>

            <div class="footer-elem">
                <div class="footer-left">
                    <start-menu></start-menu>
                </div>
                <div class="footer-right">
                        <div id="warning">
                            <div id="inside">
                                <div class="flex">
                                    <img src="/views/assets/icons/antivirus.png">
                                    <p><b>Your computer might be at risk</b></p>
                                    <button id="close-bubble"><div class="overlay"></div></button>
                                </div>
                                <p>Antivirus Software might not be installed</p>
                                <p>Click this balloon to fix this problem</p>
                            </div>
                            <div class="bubble-tip"></div>
                        </div>
                    <img class="footer-icon" src="/views/assets/icons/antivirus.png">
                    <span id="clock">00:00</span>
                </div>
            </div>
        `;
    }
}

customElements.define("footer-elem", FooterElem);