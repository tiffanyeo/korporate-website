
import { ClientRouter } from "../../../../router.js"

export class SignOutElem extends HTMLElement {

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
            .login-window {
                background-color: lightgray;
                border-radius: 10px;
                padding: 12px;
            }

            .login-window>h3 {
                margin-top: 5px;
            }

            .input-container {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            h3 {
                color: var(--color-blue-160)
            }

            input {
                padding: 6px;
            }

            label {
                color: var(--color-blue-160);
            }
            .btn-symbol-container {
                display: flex;
                justify-content: space-between;
            }

            .btn-sign-in {
                margin-top: 8px;
                height: min-content;
                padding: 6px 8px;
            }

            .opt-val {
                padding: 100px;
            }

            select {
                padding: 6px;
            }
            
            .icon-img {
                margin-top: 12px;
                max-width: 40px;
            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>${this.style()}</style>
            <div class="login-window">
                <h3>Korporate Intranät</h3>
                <div class="input-container">
                    <button class="btn-sign-out">Logga ut</button>
                </div>
            </div>
        `;
    }

    eListeners() {
        // SIGN-OUT
        const btn = this.shadowRoot.querySelector(".btn-sign-out");
        btn.addEventListener("click", () => {

            // BUILD UP HTML FIRST

            const main = document.querySelector("main");

            // 2. Bygg upp public-strukturen igen
            main.innerHTML = `
            <header-elem></header-elem>
            <main-navigation></main-navigation>
            <div id="content"></div>`;


            const path = "/about";
            ClientRouter.setNewURL(path)
        })

    }

}

customElements.define("sign-out-elem", SignOutElem);