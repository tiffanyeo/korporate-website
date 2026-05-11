
class ContactView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    renderSub() {
        setTimeout(() => {
            this.shadowRoot.getElementById('myNav').buttons = [
                { title: 'Kontakta Oss', href: '/' },
            ];
        }, 0);
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
            .blue {
                margin: 0;
                background: var(--color-blue-120);
                color: var(--color-gray-100);
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
        <sub-navigation id="myNav"></sub-navigation>
        <div id="container">
            <div class="content">
                <p></p>
            </div>
        </div>
        `;
        this.renderSub();
    }

}
customElements.define("contact-view", ContactView);