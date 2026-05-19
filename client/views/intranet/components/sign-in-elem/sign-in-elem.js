
import { ClientRouter } from "../../../../router.js"

export class SignInElem extends HTMLElement {

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
                    <label for="email">Email</label>
                    <input id="email" type="email" placeholder="Enter your email">

                    <label for="pwd">Lösenord</label>
                    <input id="pwd" type="password" placeholder="Enter your password">
                </div>
                
                <div class="btn-symbol-container">
                    <button class="btn-sign-in">Sign in</button>
                    <div class="icon-container">
                        <img class="icon-img" src="/views/assets/icons/Korporate Symbol 2.png" alt="ICON">
                    </div>
                </div>
            </div>
        `;
    }

    eListeners() {

        const btn = this.shadowRoot.querySelector(".btn-sign-in");

        // SIGN-IN
        btn.addEventListener("click", () => {

            // const path1 = "/remoteDesktop";
            const path1 = "/staffIntranet";
            const path2 = "/staffIntranetCEO";
            const email = this.shadowRoot.querySelector("#email").value.toLowerCase();
            const pwd = this.shadowRoot.querySelector("#pwd").value.toLowerCase();

            // SANDRA + IRMA INTRANET
            if (
                email === "irma.nagy.korporate@gmail.com" ||
                email === "sandra.pterov.korporate@gmail.com" &&
                pwd === "pisa") {ClientRouter.setNewURL(path1);}

            // CARL INTRANET
            if (email === "carl.nielsen.korporate@gmail.com" &&
                pwd === "pisa"
            ) {ClientRouter.setNewURL(path2);};

        })

    }


}

customElements.define("sign-in-elem", SignInElem);