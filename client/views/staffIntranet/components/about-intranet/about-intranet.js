
class AboutIntranetView extends HTMLElement {

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

    renderSub() {
        setTimeout(() => {
            this.shadowRoot.getElementById('myNav').buttons = [
                { title: 'Nyheter', href: 'nyheter' },
                { title: 'Min avdelning', href: 'avdelning' },
            ];
            this.eListeners();
            this.toggleContent("about");
        }, 0);
    }

    style() {
        return `
        
            #container {}
            
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
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
        
            <style>${this.style()}</style>
            
            <sub-navigation id="myNav"></sub-navigation>
            
            <div id="container">
            
            </div>
        `;

        this.renderSub();
    }


    toggleContent(clickedBtn) {

        const container = this.shadowRoot.querySelector("#container");

        switch (clickedBtn) {

            case "nyheter":
                container.innerHTML = `
                    <div class="blue">
                        <h1>Nyheter</h1>
                    </div>
                    <div class="two">
                        <billboard-view></billboard-view>
                    </div>
                `;
                break;

            case "avdelning":
                container.innerHTML = `
                
                    <div class="blue">
                        <h1>Avdelning</h1>
                    </div>
                    <div class="two">
                        <billboard-view></billboard-view>
                    </div>
                    
                `;
                break;


            default:
                container.innerHTML = `DEFAULT`;

        }
    }
}

customElements.define("about-intranet-view", AboutIntranetView);