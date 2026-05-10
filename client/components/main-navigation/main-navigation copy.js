import { ClientRouter } from "../../router.js";

export class MainNavigation extends HTMLElement {

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
            .main-nav-container {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }

            .button-container {
                width: 100%;
                padding: 0 20px;
                display: flex;
                justify-content: space-around;
            }

            .nav-btn {
                background-color: var(--color-gray-100);
                border: 1px solid var(--color-gray-140);
                box-shadow: 1px 2px 3px 2px rgba(72, 72, 72, 0.2);
                border-radius: 3px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3px;
                height: 30px;
                width: 70px;
            }
            
            .nav-btn:hover {
                cursor: pointer;
            }

            .arrow-right {
                width: 0;
                height: 0;
                border-top: 6px solid transparent;
                border-bottom: 6px solid transparent;
                border-left: 6px solid var(--color-blue-120);
            }
            
            .active-button {
                background-color: var(--color-gray-30);
            }
            
            .active-arrow {
                border-left: 6px solid var(--color-yellow-120);
            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>${this.style()}</style>
            
            <div class="main-nav-container">
                <div class="button-container">
                    <button class="nav-btn active-button" id="about">
                        <div class="arrow-right active-arrow"></div>
                        About
                    </button>
                    <button class="nav-btn" id="news">
                        <div class="arrow-right"></div>
                        News
                    </button>
                    <button class="nav-btn" id="contact">
                        <div class="arrow-right"></div>
                        Contact
                    </button>
                    <button class="nav-btn" id="staff">
                        <div class="arrow-right"></div>
                        Staff
                    </button>
                </div>
            </div>
        `;
    }

    eListeners() {

        const navBtns = this.shadowRoot.querySelectorAll(".nav-btn");
        navBtns.forEach(currNavBtn => {
            currNavBtn.addEventListener("click", () => {

                const currActive = this.shadowRoot.querySelectorAll(".active-button");
                if (currNavBtn == currActive) return;

                // Toggle classes
                currActive.classList.toggle(".active-button");
                currActive.classList.toggle(".active-arrow");
                currNavBtn.classList.toggle(".active-button");
                currNavBtn.classList.toggle(".active-arrow");

                this.render();
            })
        });

    }

    routing() {

        const btns = this.shadowRoot.querySelectorAll("button");

        for (let currBtn of btns) {

            switch (currBtn.id) {
                case "about":
                    ClientRouter.setNewURL()
                    console.log("hej")
                    break;
                case "c":
                    console.log("hej")
                    break;
                case "s":
                    console.log("hej")
                    break;
                case "f":
                    console.log("hej")
                    break;
                default:
                    console.log("hej")
                    break
            }
        }

    }

}

customElements.define("main-navigation", MainNavigation);