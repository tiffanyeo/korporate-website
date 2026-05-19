
import "./components/intranet-main-navigation/intranet-main-navigation.js"
import "./components/intranet-news/intranet-news.js"
import "./components/my-pages/my-pages.js"
import "./components/routines-view/routines-view.js"
import "./components/sign-out-elem/sign-out-elem.js"
import "./components/staff-feed/staff-feed.js"

class StaffIntranet extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.isCEO = this.getAttribute("ceo") === "true";
    }

    connectedCallback() {
        this.render();
        console.log("SIGNED IN AS CEO?:", this.isCEO)
    }

    style() {
        return `

            .content {
                margin: 0 30px;
                background: var(--color-gray-100);
                background: pink;
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 24px;
            }

        `;
    }

    render() {

        // MAIN NAV CEO or STAFF
        if (this.isCEO) {
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
                <header-elem intranet="true"></header-elem>
                <intranet-main-navigation ceo="true"></intranet-main-navigation>
                <div id="content">
                    <div id="container">
                        <staff-feed></staff-feed>
                    </div>
                </div>
            `;
        } else {
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
                <header-elem intranet="true"></header-elem>
                <intranet-main-navigation ceo="false"></intranet-main-navigation>
                <div id="container">
                    <div id="content">
                        <staff-feed></staff-feed>
                    </div>
                </div>
            `;
        }
    }
    
}

customElements.define("staff-intranet", StaffIntranet);