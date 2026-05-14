
import "./components/sign-out-elem/sign-in-elem.js"
import "./components/about/about.js"

class StaffIntranet extends HTMLElement {
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
        
            body {
                margin: 0;
                padding: 0;
                background-color: #222;
                /* bakgrund runt mobilen */
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            }

            main {
                /* iPhone Pro Max */
                max-width: 430px;
                min-height: 932px;
                /* iPhone Pro Max */
                margin: 0px auto;
                background-color: blue;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            }
            
        
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
                <about-intranet-view></about-intranet-view>
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
customElements.define("staff-intranet-view", StaffIntranet);