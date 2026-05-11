
import "./components/sign-in-elem/sign-in-elem.js";

class IntranetView extends HTMLElement {
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
                { title: 'Intranet', href: 'intranet' }
            ];
            this.eListeners();
        }, 0);
    }
    
    style() {
        return `
            #container{
                margin: 0 30px;
                background: var(--color-gray-100);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            h1{
                margin: 0;
                font-size: 14px;
            }
            h3{
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
            .blue{
                margin: 0;
                background: var(--color-blue-120);
                color: var(--color-gray-100);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content{
                padding: 2px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content p{
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
                <sign-in-elem></sign-in-elem>
            </div>
        </div>
        `;
        this.renderSub();
    }

    eListeners() {

        const nav = this.shadowRoot.querySelector("#myNav");
        nav.addEventListener("click", () => {
            const clickedBtn = nav.activeBtn;
            this.toggleContent(clickedBtn.href);
        });

    }

    toggleContent(clickedBtn) {

        const h1 = this.shadowRoot.querySelector("h1");
        const parent = this.shadowRoot.querySelector(".content");
        let childElem = ""

        switch (clickedBtn) {

            case "intranet":
                h1.innerHTML = "Här loggar du in på vårt intranät";
                childElem = "<sign-in-elem></sign-in-elem>";
                parent.innerHTML = `${childElem}`;
                break;

            default:
                h1.innerHTML = "Här loggar du in på vårt intranät";
                childElem = "<sign-in-elem></sign-in-elem>";
                parent.innerHTML = `${childElem}`;
                break;
        }
    }

}
customElements.define("intranet-view", IntranetView);