
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
                margin: 10px;
                box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.501);
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

            .icon-container {
                display: flex;
                justify-content: center;
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
                padding: 10px 20px;
                color: var(--color-blue-160);
                background-color: var(--color-purple-30);
                border-radius: 8px;
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

            .pwd-feedback {
                text-align: center;
                color: var(--color-blue-160);
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
                    <p class="pwd-feedback"></p>
                    <button class="btn-sign-in">Sign in</button>
                </div>

                <div class="icon-container">
                    <img class="icon-img" src="/views/assets/icons/Korporate Symbol 2.png" alt="KORP">
                </div>

            </div>
        `;
    }

    eListeners() {

        const btn = this.shadowRoot.querySelector(".btn-sign-in");

        // SIGN-IN
        btn.addEventListener("click", () => {

            const path1 = "/staffIntranet";
            const path2 = "/staffIntranetCEO";
            const email = this.shadowRoot.querySelector("#email").value.toLowerCase();
            const pwd = this.shadowRoot.querySelector("#pwd").value.toLowerCase();

            // SANDRA + IRMA INTRANET
            if ((
                email === "irma.nagy.korporate@gmail.com" ||
                email === "sandra.petrov.korporate@gmail.com"
            )
                && pwd === "pisa"
            ) return ClientRouter.setNewURL(path1);

            // CARL INTRANET
            if (email === "carl.nielsen.korporate@gmail.com" &&
                pwd === "pisa"
            ) return ClientRouter.setNewURL(path2);

            // WRONG PWD
            const feedback = this.shadowRoot.querySelector(".pwd-feedback");
            feedback.innerHTML = "Please try again.";
            this.shadowRoot.querySelector("#email").value = "";
            this.shadowRoot.querySelector("#pwd").value = "";

        })

    }


}

customElements.define("sign-in-elem", SignInElem);