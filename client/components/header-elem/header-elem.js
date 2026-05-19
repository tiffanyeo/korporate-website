


export class HeaderElem extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.isIntranet = this.getAttribute("intranet") === "true";
    }

    connectedCallback() {
        this.render();
    }

    style() {
        if (this.isIntranet) {
            return `
                .header-comp {
                    height: 130px;
                    background-color: var(--color-yellow-100);
                    display: flex;
                    flex-direction: row;
                    justify-content: right;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    margin: 30px 20px 20px;
                    height: 20px;
                    border: 2px solid var(--color-yellow-160);
                    border-radius: 5px;
                    padding: 20px 10px
                }

                .logo-text-k {
                    font-size: xx-large;
                    margin-right: -3px;
                }

                .logo-text {
                    color: var(--color-yellow-160);
                }
        `
        }
        return `
        .header-comp {
                    height: 130px;
                    background-color: var(--color-blue-100);
                    display: flex;
                    flex-direction: row;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    margin: 30px 20px 20px;
                    height: 20px;
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
        `
    }
    render() {
        if (this.isIntranet) {
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
    
                <div class="header-comp">
                    <div class="logo">
                        <p class="logo-text logo-text-k">K</p>
                        <p class="logo-text logo-text-orporate">orporate Intranet</p>
                    </div>
                </div>
            `;
        } else {
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
    
                <div class="header-comp">
                    <div class="logo">
                        <p class="logo-text logo-text-k">K</p>
                        <p class="logo-text logo-text-orporate">orporate</p>
                    </div>
                </div>
            `;
        }
    }

}

customElements.define("header-elem", HeaderElem);