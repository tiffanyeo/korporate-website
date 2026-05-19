import { ClientRouter } from "../../../../router.js";

class StaffFeed extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    renderSub() {
        // SUB-NAV
        setTimeout(() => {
            this.shadowRoot.getElementById('myNav').buttons = [
                { title: 'Nyheter', href: 'news' },
                { title: 'Rutiner', href: 'routines' },
            ];
            this.eListeners();
            this.toggleContent("news");
        }, 0);

    }

    style() {
        return `
                
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
                <news-view></news-view>
            </div>
        `;
        this.renderSub();
    }

    eListeners() {
        const nav = this.shadowRoot.querySelector("#myNav");
        nav.addEventListener("click", () => {
            const clickedBtn = nav.activeBtn;
            // SUB-NAV RENDERING
            this.toggleContent(clickedBtn.href);
        });
    }

    toggleContent(clickedBtn) {

        const container = this.shadowRoot.querySelector("#container");

        switch (clickedBtn) {
            case "news":
                container.innerHTML = `<intranet-news></intranet-news>`;
                break;
            case "routines":
                container.innerHTML = `<routines-view></routines-view>`;
                break;
            default:
                container.innerHTML = `<intranet-news></intranet-news>`;
        }


    }

}
customElements.define("staff-feed", StaffFeed);