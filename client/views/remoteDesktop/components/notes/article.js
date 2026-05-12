export class ArticleApp extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        this.setElistener();
    }

    setElistener(){
        const mini = this.shadowRoot.querySelector("#minimize");
        const maxi = this.shadowRoot.querySelector("#maximize");
        const close = this.shadowRoot.querySelector("#close");

        const window = this.shadowRoot.querySelector("#notes");
        
        close.addEventListener("click", () => {
            this.remove();
        })

        mini.addEventListener("click", ()=>{
            this.classList.toggle("minimized")
        })

        maxi.addEventListener("click", ()=>{
            this.classList.toggle("maximized")
        })

    }
    riddle(){
        const text = `<b>“Tidigare anställda vittnar: "Vi blev kontrollerade”</b>\n\nEn anonym källa har läckt information om att ett företag i namnet Korprate under flera års tid har varit inblandad i en omfattande kriminell verksamhet. Enligt uppgifter handlar det om penningtvätt i flera länder där stora summor pengar har först genom legitima affärsverksamheter.\n
Flertalet tidigare anställda vittnar om en intern kultur som präglas av rädsla, hot och intern kontroll. I intervjuer framkommer det hur medarbetarna blivit utsatta för utpressning där ledningen samlat information om sina medarbetare som senare använts för att utöva påtryckningar och säkerställa lojalitet.\n
\t-<i>"Det var alltid frivilligt att stanna. När du väl var inne fanns det ingen utväg eftersom de hade tillgång till all min privata information som användes som verktyg för utpressning”</i> Säger en tidigare anställd från Koprate.\n
Utredare misstänker även att företaget varit inblandat i utpressning mot externa parter där hot förekommit om ekonomisk utpressning samt offentlig exponering av information.\n
-<i>"När du väl ser symbolen är det redan för sent”</i>
Ingen vet hur långt deras verksamhet sträcker sig, men en sak som återkommer i varje fall är en symbol, en markering och ett namn.\n
Trots allvarliga anklagelser nekar Korprate till samtliga påståenden och hävdar att informationen och dokumenten är manipulerade. Samtidigt fortsätter nya dokument att dyka upp med kontinuerliga bevis som tyder på att påståendena stämmer. Myndigheter i flera länder har för nuvarande inlett nya granskningar mot företaget. 
`
        
        return text;
        }



    render(){
        this.shadowRoot.innerHTML = `
            <style>
                #notes{
                    z-index: 10;
                    position: absolute;
                    top: 100px;

                }
                .window {
                    margin: 8px;
                    width: fit-content;
                    font-size: 11px;
                    border: 2px solid rgba(0, 102, 255, 1);
                    background: lightblue;
                    display: flex;
                    flex-direction: column;
                    border-radius: 4px;
                }

                .window fieldset {
                    margin-bottom: 9px;
                }

                .title-bar {
                    font-size: 11px;
                    background: linear-gradient(180deg,
                                    rgba(9, 151, 255, 1) 0%,
                                    rgba(0, 83, 238, 1) 8%,
                                    rgba(0, 80, 238, 1) 40%,
                                    rgba(0, 102, 255, 1) 88%,
                                    rgba(0, 102, 255, 1) 93%,
                                    rgba(0, 91, 255, 1) 95%,
                                    rgba(0, 61, 215, 1) 96%,
                                    rgba(0, 61, 215, 1) 100%);
                    padding: 3px 2px 3px 3px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                }
                .title-bar-text {
                    font-weight: bold;
                    color: white;
                    letter-spacing: 0;
                    margin-right: 24px;
                }
                .title-bar-controls {
                    display: flex;
                    gap: 2px;
                }
                
                .title-bar-controls button {
                    padding: 0;
                    display: block;
                    min-width: 14px;
                    min-height: 14px;
                    border: white;
                    border-radius: 2px;
                }
                
                .title-bar-controls button:focus {
                    outline: none;
                }
                
                button[aria-label="Minimize"] {
                    background-image: url(views/assets/icons/MinimizeWindow.png);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                button[aria-label="Maximize"] {
                    background-image: url(views/assets/icons/MaximizeWindow.png);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                button[aria-label="Close"] {
                    background-image: url(views/assets/icons/CloseWindow.png);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }

                
                .window-menu{
                    padding: 2px 4px;
                    background: #dfdfdf;
                    box-shadow: 0 0 1px rgba(0, 0, 0, 0.18);
                    display: flex;
                    gap: 8px;
                }
                
                .window-menu-item {
                    font-size: 10px;
                }
                
                .window-body {
                    overflow: clip;
                    flex-grow: 1;
                    border: rgb(0, 61, 215);
                }
                
                .window-body pre {
                    margin: -8px;
                }
                
                .editor {
                    border: 1px solid #808080;
                    background: white;
                    width: 350px;
                    min-width: 180px;
                    max-width: 400px;
                    height: 400px;
                    padding: 4px;
                    font-family: "Courier New", monospace;
                    white-space: pre-wrap;
                    overflow: auto;
                    resize: both;
                }
                .editor:focus {
                    outline: 2px solid #4a90e2;
                }
                
                
                .status-bar {
                    margin: 0px 1px;
                    display: flex;
                    gap: 1px;
                }
                
                .status-bar-field {
                    box-shadow: inset -1px -1px;
                    flex-grow: 1;
                    padding: 2px 3px;
                    margin: 0;
                }
                
                
                :host(.maximized) #notes {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                }

                :host(.minimized) #notes {
                    height: 30px;
                    overflow: hidden;
                }
            </style>
            <div id="notes">
                <div class="window">
                    <div class="title-bar">
                        <div class="title-bar-text">Artikel - Notepad</div>
                        <div class="title-bar-controls">
                            <button id="minimize"aria-label="Minimize"><div></div></button>
                            <button id="maximize"aria-label="Maximize"></button>
                            <button id="close"aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="window-menu">
                        <div class="window-menu-item">File</div>
                        <div class="window-menu-item">Edit</div>
                        <div class="window-menu-item">Format</div>
                        <div class="window-menu-item">View</div>
                        <div class="window-menu-item">Help</div>
                    </div>
                    <div class="window-body">
                    <div id="input-box">
                        <div id="addText" class="editor" contenteditable="true">${this.riddle()}</div>
                    </div>
                  </div>
                </div>
            </div>
        `;
    }
}

customElements.define("article-app", ArticleApp);