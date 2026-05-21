//import { createHistogram } from "node:perf_hooks";
import "./menu-item.js";

export class MenuPopup extends HTMLElement{
    constructor(){
        super();
        
    }

    connectedCallback(){
        this.render();
        this.setEList();
    }
    setEList(){
        const host = this.getRootNode().host;
        const hostParent = host.getRootNode().host;
        const audio = hostParent.shadowRoot.querySelector("#errorAudio");

        const allItems = this.querySelectorAll(".item");

        allItems.forEach((item) => item.addEventListener("click", ()=>{
            audio.currentTime = 0;
            audio.play();
            audio.currentTime = 0;
        }))
    }

    render(){
        this.innerHTML = `
        
        <style>
            #menu {
                display: flex;
                flex-direction: column;
                z-index: 1000;
                position: absolute;
                background-color: white;
                width: 300px;
                height: 400px;
                bottom:40px;
                left: 0;
                box-shadow: 0 30px 20px rgba(0, 0, 0, 0.18)
            }
            .menu-border{
                display:flex;
                align-items: center;
                padding: 7px 8px;
                gap: 8px;
                color: #FBFBFA;
                background: linear-gradient(180deg,
                    rgba(9, 151, 255, 1) 0%,
                    rgba(0, 83, 238, 1) 8%,
                    rgba(0, 80, 238, 1) 40%,
                    rgba(0, 102, 255, 1) 88%,
                    rgba(0, 102, 255, 1) 93%,
                    rgba(0, 91, 255, 1) 95%,
                    rgba(0, 61, 215, 1) 96%,
                    rgba(0, 61, 215, 1) 100%);
            }
            .menu-top h5{
                margin: 0;
                text-shadow:1px 1px 3px rgba(0,0,0,.6);
            }
            .user-icon{
                width: 40px;
                height: 40px;
                background-image: url(views/assets/icons/chess.jpeg);
                background-size: cover;
                background-position: center;
                border-radius: 2px;
                border: 1px solid white;
                box-shadow: 1px 1px 4px rgba(0,0,0,0.4),
                    inset -1px -1px 2px rgba(0,0,0,0.4);
            }
            .menu-middle{
                display: flex;
                flex-grow: 2;
            }
            .menu-bottom{
                justify-content: flex-end;
                gap: 16px;
                height: 26px;
            }

            .menu-btm-btn{
                cursor: default;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .menu-btm-btn img{
                width: 24px;
                height: 24px;
            }
            .menu-btm-btn p{
                margin: 0;
                color: white;
                font-size: 12px;
                font-weight: lighter;
            }
            .btn-wrapper{
                height: 24px;
                width: 24px;
                position: relative;
                align-self: center;
                display: inline-block;
            }
            .hover-overlay{
                position: absolute;
                inset: 0;
                background: rgba(255, 255, 255, 0.15);
                margin: 0 auto;
                width: 22px;
                height: 23px;
                border-radius: 2px;
                display: none;
                pointer-events: none;
            }
            .btn-wrapper:hover .hover-overlay{
                display: block;
            }
            .menu-middle-column{
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            #menu-middle-left{
                z-index: 10;
                width: 320px;
                border-right: 0.5px solid rgba(0, 0, 0, 0.52);
                box-shadow: 1px 0 1px rgba(0, 0, 0, 0.23),
                            inset -1px 0 1px #e6faff;
            }
            #menu-middle-right{
                width: 280px;
                background-color: #e6faff;
            }
            #ALLP{
                border-top: 1px solid var(--color-gray-100);
                margin-top: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4px;
                padding: 8px;
                font-weight: bold;
                font-size: 12px;

                img{
                    width: 18px;
                    height: 18px;
                }
            }

            #ALLP:hover{
                background-color: #0f61cb;
                color: #FBFBFA;
            }
        </style>

        <div id="menu">
            <div class="menu-top menu-border">
                <div class="user-icon">
                </div>
                <h5>Carl Nielsen</h5>
            </div>
            <div class="menu-middle">
                <div class="menu-middle-column" id="menu-middle-left">
                    <menu-item class="item" app="Internet" name="Internet Explorer" imgpath="./views/assets/icons/app.icon-explorer.png"></menu-item>
                    <menu-item class="item" app="Internet Spades" imgpath="./views/assets/icons/app-icon-spades-game.png"></menu-item>
                    <div class="item" id="ALLP">All Programs <img src="./views/assets/icons/green-triangle.png"></div>
                </div>
                <div class="menu-middle-column" id="menu-middle-right"></div>
            </div>
            <div class="menu-bottom menu-border">
                <div class="menu-btm-btn">
                    <div class="btn-wrapper">
                        <img src="/views/assets/icons/LogOff.png">
                        <div class="hover-overlay"></div>
                    </div>
                    <p>Log Off</p>
                </div>
                <div class="menu-btm-btn">
                    <div class="btn-wrapper">
                        <img src="/views/assets/icons/ShutDown.png">
                        <div class="hover-overlay"></div>
                    </div>
                    <p>Shut Down</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("menu-popup", MenuPopup)