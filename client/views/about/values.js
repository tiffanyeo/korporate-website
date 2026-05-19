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
            h1{
                margin: 0;
                font-size: 14px;

            }
            h3{
                margin: 0;
            }
            .wide {
                letter-spacing: 12%;
            }
            .thin{
                font-weight: 100;
                margin: 24px auto;
                text-align: center
            }
            p{
                margin: 0 1px;
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

            .value{
                font-size: 12px;
                display: flex;
                flex-direction: column;
                gap: 4px;
                margin-bottom: 16px;
            }
        </style>
            <div class="blue">
                <h1>Våra värden</h1>
            </div>
            <h1 class="wide thin">Korporate har flera stadgar som är grundläggande för verksamheten</h2>
            <div class="value">
                <h3>Garanterad kundnöjdhet</h3>
                <p>Vi fokuserar alltid på att göra kunden nöjd.</p>
            </div>
            <div class="value">
                <h3>Utvärderar ständigt</h3>
                <p>Korporate utvärderar alla sina case efter utförandet för att granska utfallen för bäst resultat.</p>
            </div>
            <div class="value">
                <h3>Bäst pris</h3>
                <p> Våra tjänster är prissatta bäst på marknaden för ultimata resultat.</p>
            </div>
            <div class="value">
                <h3>Ingen diskriminering</h3>
                <p>Vi arbetar kontinueligt med noll tolerans för diskriminering på arbetsplatsen. Korporate är en trakasserifri-zon som välkomnar alla.</p>
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

