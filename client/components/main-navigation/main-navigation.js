export class MainNavigation extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.eListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
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
            </style>
            
            <div class="main-nav-container">
                <div class="button-container">

                    <button class="nav-btn">
                        <div class="arrow-right"></div>
                        About
                    </button>
                    <button class="nav-btn">
                        <div class="arrow-right"></div>
                        News</button>
                    <button class="nav-btn">
                        <div class="arrow-right"></div>
                        Contact</button>
                    <button class="nav-btn">
                        <div class="arrow-right"></div>
                        Values</button>
                </div>
            </div>
        `;
    }

    eListeners() {

        const navBtns = ""
        
/*         navBtns.addEventlistners("click", () => {
            // Add classlist ".active-button", ".active-arrow"
        } ) */
    } 


}

customElements.define("main-navigation", MainNavigation);