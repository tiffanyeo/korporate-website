
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
                    padding: 10px 20px;
                    border-radius: 5px;
                }

                .staff-info {
                    width: 100%;
                }

                .staff-position-container {
                    display: flex;
                    flex-direction: row;
                }

                .staff-image-quote-container {
                    display: flex;
                }

                .staff-image {
                    border: 2px solid hotpink;
                    width: 150px;
                    border-radius: 4px;
                    background-color: lightblue;
                    margin-left: 20px;
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
                            <h4 class="staff-title">VD</h4>
                            <p class="staff-name">Carl Nielsen</p>
                            <p class="staff-start-year">1978</p>
                            <p class="staff-quote">"Vi bygger inte bara hemsidor. Vi bygger första intryck."</p>
                        </div>
                        <div class="staff-image-quote-container">
                            <img src="/views/assets/images/carl-profile-2.jpg" alt="IMG" class="staff-image">
                        </div>
                    </div>
                    <div class="staff-history-text-container">
                        <p class="staff-history-text">Resan började med en dator, stora idéer och viljan att skapa något eget. Genom hårt arbete och passion för att hjäpa företag växte Korporate fram med målet att hjälpa företag bygga starka digitala varumärken.</p>
                    </div>
                </div>
            
                <div class="staff-card">
                    <div class="staff-position-container">
                        <div class="staff-info">
                            <h4 class="staff-title">My Tile</h4>
                            <p class="staff-name">Staff Name</p>
                            <p class="staff-start-year">0000</p>
                        </div>
                        <div class="staff-image-quote-container">
                            <img src="" alt="IMG" class="staff-image">
                            <p class="staff-quote">"To find the caduceus, with its two snakes and wings"</p>
                        </div>
                    </div>
                    <div class="staff-history-text-container">
                        <p class="staff-history-text">The Rod of Asclepius takes its name from the Greek god Asclepius, a deity associated with healing and medicinal arts in ancient Greek religion and mythology.</p>
                    </div>
                </div>
                <div class="staff-card">
                    <div class="staff-position-container">
                        <div class="staff-info">
                            <h4 class="staff-title">My Tile</h4>
                            <p class="staff-name">Staff Name</p>
                            <p class="staff-start-year">0000</p>
                        </div>
                        <div class="staff-image-quote-container">
                            <img src="" alt="IMG" class="staff-image">
                            <p class="staff-quote">"To find the caduceus, with its two snakes and wings"</p>
                        </div>
                    </div>
                    <div class="staff-history-text-container">
                        <p class="staff-history-text">The Rod of Asclepius takes its name from the Greek god Asclepius, a deity associated with healing and medicinal arts in ancient Greek religion and mythology.</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("staff-card-container-elem", StaffCardContainerElem);