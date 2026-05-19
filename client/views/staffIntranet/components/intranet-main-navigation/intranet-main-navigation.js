import { ClientRouter } from "../../../../router.js";

/* intranet-main-navigation ceo="TRUE" */

export class IntranetMainNav extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        // Component state
        this.isCEO = this.getAttribute("ceo") === "true";
        
        
        const path = window.location.pathname;
        if (path.includes("myPages")) {
            this.activePage = "myPages";
        } else {
            this.activePage = "staffIntranet";
        }
    }

    connectedCallback() {
        this.render();
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
                box-sizing: border-box;
                width: 330px;
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

        const createButton = (id, label) => {

            const active = this.activePage === id;

            return `
                <button 
                    class="nav-btn ${active ? "active-button" : ""}" 
                    data-page="${id}"
                >
                    <div class="arrow-right ${active ? "active-arrow" : ""}"></div>
                    ${label}
                </button>
            `;
        };

        this.shadowRoot.innerHTML = `
            <style>${this.style()}</style>

            <div class="main-nav-container">
                <div class="button-container">
                    ${createButton("staffIntranet", "Flöde")}
                    ${createButton("myPages", "Mina sidor")}
                </div>
            </div>
        `;

        this.eListeners();
    }

    eListeners() {

        const navBtns = this.shadowRoot.querySelectorAll(".nav-btn");

        navBtns.forEach(btn => {

            btn.addEventListener("click", () => {
                const page = btn.dataset.page;
                this.activePage = page;
                this.routing(page);
                this.render();
            });

        });

    }

    routing(page) {

        switch (page) {

            case "staffIntranet":
                if (this.isCEO) return ClientRouter.setNewURL("/staffIntranetCEO");
                ClientRouter.setNewURL("/staffIntranet")
                break;

            case "myPages":
                if (this.isCEO) return ClientRouter.setNewURL("/myPagesCEO");
                ClientRouter.setNewURL("/myPages");
                break;

            default:
                ClientRouter.setNewURL("/staffIntranet");
                break;

        }
    }
}

customElements.define("intranet-main-navigation", IntranetMainNav);