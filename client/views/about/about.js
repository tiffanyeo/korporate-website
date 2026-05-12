import "./values.js"

class AboutView extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    eListeners() {
        const nav = this.shadowRoot.querySelector("#myNav");
        nav.addEventListener("click", () => {
            const clickedBtn = nav.activeBtn;
            this.toggleContent(clickedBtn.href);
        })
    }

    // Sub-nav!
    renderSub() {
        setTimeout(() => {
            this.shadowRoot.getElementById('myNav').buttons = [
                { title: 'Om oss', href: 'about' },
                { title: 'Våra värden', href: 'values' },
                { title: 'Vår Personal', href: 'staff' }
            ];
            this.eListeners();
            this.toggleContent("about");
        }, 0);
    }

    toggleContent(clickedBtn) {

        const container = this.shadowRoot.querySelector("#container");

        switch (clickedBtn) {

            case "about":
                container.innerHTML = `
                    <div class="blue">
                        <h1>Om oss</h1>
                    </div>
                    <div class="two">
                        <p>
                            Proaktiva lösningar genomsyrar vår filosofi på Korporate. I 36 år har vi hjälpt företag med att utveckla sina analysprocesser. Med ett flexibelt arbetssätt kan vi enkelt anpassa er till marknaden. 
                        </p>
                        <p>
                            Genom åren har vi etablerat sig internationellt där vi utför allt från privata till företagsärenden. Tillsammans med dig vill vi samarbeta och utveckla din process. En skräddarsydd process som hjälper dig och ditt företag inför framtiden.
                        </p>
                        <p>
                            Allt började med vår VD, en ung dansk man som föddes på en osannolik plats med stora drömmar. Vår VD Carl Nielsen driver företaget med sina anställda som är bosatta runt om i hela världen. Huvudkontoret i Toscanas västra del med utsikt mot floden Arno har en betydande roll för grundaren Carl Nielsen, både som hans födelseplats och som inspirationskälla. Det lutande tornet symboliserade ståndaktighet genom svårigheter vilket lade grunden för hans ide för uppbyggnaden av Korporate över lång tid.
                        </p>
                        <p>
                            Hemorten är något som alltid kommer att finnas i Nielsens inspiration och som alltid symboliserar grundpelaren för Korporate. 
                        </p>
                    </div>
                `;
                break;

            case "values":
                container.innerHTML = `
                    <values-view></values-view>
                `;
                break;

            case "staff":
                container.innerHTML = `
                    <div class="blue">
                        <h1>Vår personal</h1>
                    </div>
                    <staff-card-container-elem></staff-card-container-elem>`;
                break;

            default:
                container.innerHTML = `
                    <div class="blue">
                        <h1>Om oss</h1>
                    </div>
                    <div class="two">
                        <p>
                            Proaktiva lösningar genomsyrar vår filosofi på Korporate. I 36 år har vi hjälpt företag med att utveckla sina analysprocesser. Med ett flexibelt arbetssätt kan vi enkelt anpassa er till marknaden. 
                        </p>
                        <p>
                            Genom åren har vi etablerat sig internationellt där vi utför allt från privata till företagsärenden. Tillsammans med dig vill vi samarbeta och utveckla din process. En skräddarsydd process som hjälper dig och ditt företag inför framtiden.
                        </p>
                        <p>
                            Allt började med vår VD, en ung dansk man som föddes på en osannolik plats med stora drömmar. Vår VD Carl Nielsen driver företaget med sina anställda som är bosatta runt om i hela världen. Huvudkontoret i Toscanas västra del med utsikt mot floden Arno har en betydande roll för grundaren Carl Nielsen, både som hans födelseplats och som inspirationskälla. Det lutande tornet symboliserade ståndaktighet genom svårigheter vilket lade grunden för hans ide för uppbyggnaden av Korporate över lång tid.
                        </p>
                        <p>
                            Hemorten är något som alltid kommer att finnas i Nielsens inspiration och som alltid symboliserar grundpelaren för Korporate. 
                        </p>
                    </div>
                `;
                
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
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
            .two{
                padding: 2px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .two p{
                line-height: 1.5;
            }
        </style>
        <sub-navigation id="myNav"></sub-navigation>
        <div id="container">
        </div>
        `;
        this.renderSub();
    }

}

customElements.define("about-view", AboutView);