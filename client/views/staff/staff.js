
import "./components/sign-in-elem/sign-in-elem.js";
import "./components/staff-card-container-elem/staff-card-container-elem.js"


class StaffView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    // Sub-nav!
    renderSub() {
        window.addEventListener("DOMContentLoaded", () => {
            this.shadowRoot.getElementById('myNav').buttons = [
                { title: 'Our Staff', href: 'staff' },
                { title: 'Intranet', href: 'intranet' }
            ]
        });

        this.eListeners()
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
            <div class="blue">
                <h1>Our Employees</h1>
            </div>
            <div class="content">
                <staff-card-container-elem></staff-card-container-elem>
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
            case "staff":
                h1.innerHTML = "Our Employees";
                childElem = "<staff-card-container-elem></staff-card-container-elem>";
                parent.innerHTML = `${childElem}`;
                break;
                
            case "intranet":
                h1.innerHTML = "Sign in to our Employee Intranet";
                childElem = "<sign-in-elem></sign-in-elem>";
                parent.innerHTML = `${childElem}`;
                console.log("HCILD")
                break;
                    
            default:
                h1.innerHTML = "Our Employees";
                childElem = "<staff-card-container-elem></staff-card-container-elem>";
                parent.innerHTML = `${childElem}`;
        }
    }

}
customElements.define("staff-view", StaffView);