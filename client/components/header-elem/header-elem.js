


export class HeaderElem extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .header-comp {
                    height: 100px;
                    background-color: var(--color-blue-100);
                    display: flex;
                    flex-direction: row;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    margin: 20px;
                    border: 2px solid var(--color-blue-160);
                    border-radius: 5px;
                    padding: 20px 10px
                }

                .logo-text-k {
                    font-size: xx-large;
                    margin-right: -3px;
                }

                .logo-text {
                    color: var(--color-blue-160);
                }
            </style>

            <div class="header-comp">
                <div class="logo">
                    <p class="logo-text logo-text-k">K</p>
                    <p class="logo-text logo-text-orporate">orporate</p>
                </div>
            </div>
        `;
    }

}

customElements.define("header-elem", HeaderElem);