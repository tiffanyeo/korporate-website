import { MenuPopup } from "../menu-popup";

export class StartMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }



    render(){
        this.shadowRoot.innerHTML = `
            <style>
                .start-menu{
                    cursor: default;
                    margin: 0;
                    height: 40px;
                    padding: 0 10px;
                    border-radius: 0px 10px 10px 0px;
                    box-shadow: inset 0px 0px 3px rgba(0,0,0,.6);;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 8px;
                    background-color: rgb(0, 156, 56);
                    background: linear-gradient(180deg,
                        rgb(103, 165, 82)0%,
                        rgb(103, 165, 82)8%,
                        rgb(0, 156, 56)40%,
                        rgb(0, 156, 56)88%,
                        rgb(0, 156, 56)95%,
                        rgb(0, 156, 56)96%,
                        rgb(47, 131, 47)100%);

                    text-shadow:1px 1px 1px rgba(0,0,0,.6);


                }
                .start-menu:hover {
                    background: rgb(103, 165, 82);

                }
                .start-menu img{
                    width: 24px;
                    height: 24px;
                    -webkit-filter: drop-shadow(1px 1px 1px rgba(0,0,0,.6));
                    filter: drop-shadow(1px 1px 1px rgba(0,0,0,.6));
                }
                .menu-p {
                    margin: 0;
                    padding-top: 2px;
                    font-weight: bold;
                    font-size: larger;
                    padding-right: 5px;
                    color: white;
                }
            </style>
            <div class="start-menu">
                <img src="/views/assets/icons/app-icon-windows-logo.png">
                <p class="menu-p"><i>start</i></p>
            </div>
        `;
    }
}

customElements.define("start-menu", StartMenu);
