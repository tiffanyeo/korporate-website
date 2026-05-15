
class BillboardView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    style() {
        return `
            h1 {
                margin: 0;
                font-size: 14px;
                text-align: center;
            }
            h3 {
                font-size: 11px;
                margin: 0;
            }
            .wide {
                letter-spacing: 12%;
            }
            .thin {
                font-weight: 100;
            }
            p {
                margin: 0;
                font-size: 10px;
            }
            .value {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
        
            <style>${this.style()}</style>
            
            <div id="container">
                
            </div>
        
        `;
    }


}

customElements.define("billboard-view", BillboardView);