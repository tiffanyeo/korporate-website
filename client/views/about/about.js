import "./values.js"

class AboutView extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
    }
    // Sub-nav!
    renderSub(){
        window.addEventListener("DOMContentLoaded", () => {
            this.shadowRoot.getElementById('myNav').buttons = [
            { title: 'Om oss', href: '/' },
            { title: 'Våra värden', href: 'Values' }
        ]});
    }

    render(){
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
            <div class="blue">
                <h1>Om oss</h1>
            </div>
            <div class="two">
                <p>
                    Korporate är ett internationellt konsultföretag som etablerades år 1990 av Mads Jensen med huvudkontor i Italien. Korporate startade av <b>tre</b> vänner som ville skapa effektivare processer för interna processer hos företag. 
                </p>
                <p>
                    I 36 år har Korporate hjälpt företag med att utveckla sina analysprocesser. Med ett flexibelt arbetssätt kan Korporate enkelt anpassa sig till marknaden. Tillsammans med dig kan Korporate.
                    Stora projekt har lagt grunden för verksamhetens tillväxt. Vi kombinerar passion med innovation. Genom kreativa lösningar anpassar vi tjänster åt just ditt behov. 
                </p>
                <p>
                    Allt från privata till företagsärenden. Tillsammans med dig vill vi samarbeta och utveckla din process. En skräddarsydd process och på så sätt hjälpa dig och ditt företag inför framtiden. 
                </p>
                <p>
                    Proaktiva lösningar implementeras kontinuerligt i kunders verksamheter.
                </p>
            </div>
        </div>
        `;
        this.renderSub();
    }

}
customElements.define("about-view", AboutView);