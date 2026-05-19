
export class StaffCardContainerElem extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .staff-container-elem {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .staff-container-h3 {
                    margin-bottom: 0;
                }
                
                .staff-card {
                    display: flex;
                    flex-direction: column;
                    background-color: lightgray;
                    padding: 20px 30px;
                    border-radius: 5px;
                }

                .staff-info {
                    width: 100%;
                }

                .staff-position-container {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                }

                .staff-image-quote-container {
                    margin: 0;
                }
                @media (max-width: 600px){
                    .staff-position-container {
                        flex-direction: column;
                        align-items: center;
                    }
                    .staff-image {
                        width: 60px;
                        margin-left: 0px;
                    }
                }

                .staff-image {
                    border: 2px solid var(--color-blue-120);
                    width: 130px;
                    border-radius: 4px;
                    background-color: lightblue;
                    object-fit: cover;
                }

                .staff-quote {
                    font-style: italic;
                    font-size: smaller;
                    padding: 0 5px;
                    text-align: center;
                }

                .staff-title {
                    font-size: larger;
                    font-weight: 500;
                    margin-top: 5px;
                    margin-bottom: 8px;
                    border-bottom: 2px solid gray;

                }

                .staff-name {
                    margin-top: 0;
                }
            </style>
            
            <div class="staff-container-elem">

                
                <div class="staff-card">
                    <div class="staff-position-container">
                        <div class="staff-info">
                            <h4 class="staff-title">Carl Nielsen</h4>
                            <p class="staff-name">VD</p>
                            <p class="staff-start-year">carl.nielsen.korporate@gmail.com</p>
                            <p class="staff-quote">"Jag jobbar inte med att bygga affärsmöjligheter, det är viktigt för mig att bygga relationer med mina kunder."</p>
                        </div>
                        <div class="staff-image-quote-container">
                            <img src="/views/assets/images/carl-profile-2.jpg" alt="IMG" class="staff-image">
                        </div>
                    </div>
                    <div class="staff-history-text-container">
                        <p class="staff-history-text">Resan började med en dator, stora idéer och viljan att skapa något eget. Genom hårt arbete och passion för att hjäpa företag växte Korporate fram med målet att hjälpa bygga starka idéer.</p>
                    </div>
                </div>
            
                <div class="staff-card">
                    <div class="staff-position-container">
                        <div class="staff-info">
                            <h4 class="staff-title">Sandra Petrov</h4>
                            <p class="staff-name">Assistent</p>
                            <p class="staff-start-year">sandra.petrov.korporate@gmail.com</p>
                            <p class="staff-quote">"Jag tror att de bästa resultaten skapas genom struktur, kommunikation och ett genuint engagemang i människorna omkring oss."</p>
                        </div>
                        <div class="staff-image-quote-container">
                            <img src="/views/assets/images/sandra-profile-2.jpg" alt="IMG" class="staff-image">
                        </div>
                    </div>
                    <div class="staff-history-text-container">
                        <p class="staff-history-text">Inifrån företaget har Sandra varit en viktig del av att skapa stabilitet, struktur och en positiv energi i det dagliga arbetet. Genom sitt engagemang och sitt sätt att alltid hålla både team och processer samman har hon blivit en självklar del av företagets utveckling.</p>
                    </div>
                </div>
                    
                <div class="staff-card">
                    <div class="staff-position-container">
                        <div class="staff-info">
                            <h4 class="staff-title">Irma Nagy</h4>
                            <p class="staff-name">Ekonomi</p>
                            <p class="staff-start-year">irma.nagy.korporate@gmail.com</p>
                            <p class="staff-quote">"För mig handlar ekonomi inte bara om siffror.. Det handlar om att skapa trygghet, struktur och hållbar utveckling för hela företaget"</p>
                        </div>
                        <div class="staff-image-quote-container">
                            <img src="/views/assets/images/staff2-profile-2.jpg" alt="IMG" class="staff-image">
                        </div>
                    </div>
                    <div class="staff-history-text-container">
                        <p class="staff-history-text">Med ett starkt öga för detaljer och ett lugnt, analytiskt arbetssätt har hon blivit en central del av företagets stabilitet och tillväxt. Hennes arbete bakom kulisserna skapar förutsättningar för både struktur, långsiktig planering och fortsatt utveckling.</p>
                    </div>
                </div>
        `;
    }
}

customElements.define("staff-card-container-elem", StaffCardContainerElem);