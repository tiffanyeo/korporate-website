
class RoutinesView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    style() {
        return `
            #container {
                margin: 0 30px;
                background: var(--color-gray-100);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            h1 {
                margin: 0;
                font-size: 14px;
            }
            h3 {
                font-size: 11px;
                margin: 0;
            }
            .wide {
                letter-spacing: 12%;
            }
            p{
                margin: 0;
                font-size: 12px;
            }
            .yellow {
                margin: 0;
                background: var(--color-yellow-100);
                color: var(--color-yellow-160);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content {
                padding: 2px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content p {
                line-height: 1.5;
            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>${this.style()}</style>
        <div id="container">
            <div class="yellow">
                <h1>Rutiner</h1>
            </div>
            <div class="content">
                <p>
                    Rutiner saknas.
                </p>
            </div>
        </div>
        `;
    }

}
customElements.define("routines-view", RoutinesView);