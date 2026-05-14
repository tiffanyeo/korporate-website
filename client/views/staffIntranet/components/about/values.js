class ValuesView extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
    }


    render(){
        this.shadowRoot.innerHTML = `
        <style>
            #container{
                box-sizing: 
                background: var(--color-gray-100);
                padding: 24px;
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            h1{
                margin: 0;
                font-size: 14px;
                text-align: center;
            }
            h3{
                font-size: 11px;
                margin: 0;
            }
            .wide {
                letter-spacing: 12%;
            }
            .thin{
                font-weight: 100;
            }
            p{
                margin: 0;
                font-size: 10px;
            }
            .value{
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        </style>
        <div id="container">
            <h1 class="wide">Våra värden</h1>
            <h1 class="wide thin">Korporate har flera stadgar som är grundläggande för verksamheten</h2>
            <div class="value">
                <h3 class="wide">Garanterad kundnöjdhet</h3>
                <p>Vi fokuserar alltid på att göra kunden nöjd.</p>
            </div>
            <div class="value">
                <h3 class="wide">Utvärderar ständigt</h3>
                <p>Korporate utvärderar alla sina case efter utförandet för att granska utfallen för bäst resultat.</p>
            </div>
            <div class="value">
                <h3 class="wide">Bäst pris</h3>
                <p>Våra tjänster är prissatta bäst på marknaden för ultimata resultat.</p>
            </div>
            <div class="value">
                <h3 class="wide">Ingen diskriminering</h3>
                <p>Vi arbetar kontinueligt med noll tolerans för diskriminering på arbetsplatsen. Korporate är en trakasserifri-zon som välkomnar alla.</p>
            </div>
        </div>
        
        `;
    }
    

}
customElements.define("values-view", ValuesView);





let text = `Korporate har flera stadgar som är grundläggande för verksamheten
            Garanterad kundnöjdhet - Vi fokuserar alltid på att göra kunden nöjd.
            Utvärderar ständigt - Korporate utvärderar alla sina case efter utförandet för att granska utfallen för bäst resultat.
            Bäst pris - Våra tjänster är prissatta bäst på marknaden för ultimata resultat. 
            Ingen diskriminering - Vi arbetar kontinueligt med noll tolerans för diskriminering på arbetsplatsen. Korporate är en trakasserifri-zon som välkomnar alla.` 

