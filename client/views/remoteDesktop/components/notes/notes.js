import sheet from "./notes.css" with {type: "css"};

export class NotesApp extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        this.shadowRoot.adoptedStyleSheets = [sheet];
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
    render(){
        this.shadowRoot.innerHTML = `
            <style>
            </style>
            <div id="notes">
                <div class="window">
                    <div class="title-bar">
                        <div class="title-bar-text">Untitled - Notepad</div>
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
                        <textarea name="" id="addText" cols="38" rows="10" placeholder=""></textarea>
                    </div>
                  </div>
                </div>
            </div>
        `;
    }
}

customElements.define("notes-app", NotesApp);