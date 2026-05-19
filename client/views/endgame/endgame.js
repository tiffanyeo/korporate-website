
class EndGame extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.isMailBoxEnding = this.getAttribute("endgame") === "true";
    }

    connectedCallback() {
        this.render();
        this.eListeners();
    }

    style() {
        return `
            #container {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: var(--color-blue-80);

            }

            .text-container {
                max-height: 1200px;
                min-height: 300px;
                max-width: 800px;
                min-width: 200px;
                padding: 40px;
                box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.501);
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 20px;
            }

            .text {
                font-weight: 500;
                text-align: center;
                color: #222;
                line-height: 130%;
            }

            .text-intro {
                margin-top: 40px;
            }

            .text-addon {
                color: #222222b0;
                font-weight: 400;
                padding-top: 20px;
                max-width: 600px;
                line-height: 130%;
            }

            .ending {
                font-style: italic;
            }

            .icon-container {
                display: flex;
                justify-content: center;
            }

            .icon {
                width: 150px;
            }
        `;
    }

    render() {

        // MAIL-BOX ENDING
        if (this.isMailBoxEnding) {
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
                <div id="container">

                    <div class="text-container">

                        <h1 class="text text-h1">Tack för ditt engagemang och lojalitet!</h1>
                        <p class="text text-intro">
                            Du är den perfekta kandidaten för oss på Korporate. Lojalitet och sekretess är våra viktigaste ledord. Leveransen du valt att slutföra betyder mycket för oss. Du gjorde rätt val och är nu i trygga händer. Brevet innehöll en check på 2 miljoner kronor som vi nu lyckats dölja från polisen. Dina möjligheter är oändliga inom Korporate och vi ser fram emot vårt framtida samarbete.
                        </p>
                        <p class="text ending">PS. Kom ihåg, lojalitet och sekretess är A och O! Vi hör av oss snart igen.
                        <p class="text ending">Ett stort tack från VD:n, Carl Nielsen</p>
                        <div class="icon-container">
                            <img class="icon" src="../client/views/assets/icons/Korporate Symbol 2.png" alt="">
                        </div>
                    </div>

                </div>
            `;
        } else {
            // TRASH CAN ENDING
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
                <div id="container">
                    <div class="text-container">
                        <h1 class="text text-h1">Tack för ditt visade intresse för Korporate och för tiden du tagit för genomförandet av din ansökan!</h1>
                        <p class="text text-intro">Vi har tyvärr valt att gå vidare med en annan kandidat, eftersom du inte uppfyller de krav vi begär.
                        </p>
                        <p class="text ending">Ha en bra dag, Korporate</p>
                        <div class="icon-container">
                            <img class="icon" src="../client/views/assets/icons/Korporate Symbol 2.png" alt="">
                        </div>
                    </div>
                    <p class=" text text-addon">PS. Du är nu medhjälpare i en illegal handling, då brevet innehöll en check på 2 miljoner kronor med tvättade pengar. Hoppsan! Bilden och uppgifterna vi har på dig kommer vi att behålla länge, så att kontakta polisen är INTE ett alternativ. Kolla dig riktigt noga över axeln framöver. Vi vet var du bor, vem du är och hur du ser ut. Du gjorde fel val.
                    </p>
                </div>
        `;
        }

    }

}

customElements.define("end-game-view", EndGame);