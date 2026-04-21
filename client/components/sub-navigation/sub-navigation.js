/*
Exempel på hur man använder sub-navigationen
<sub-navigation id="myNav"></sub-navigation>

<script>
  document.getElementById('myNav').buttons = [
    { title: 'Start', href: '/' },
    { title: 'Blogg', href: '/blogg' },
    { title: 'Om oss', href: '/om' }
  ]
</script>
*/



export class SubNavigation extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this._buttons = [];

    }

    set buttons(value){
        this._buttons = value;
        this.render();
        this.eListeners();
    }

    renderButtons(){
        if (!this._buttons) return "";
        return this._buttons
        .map((link, index) =>
            `<button ${index === 0 ? 'id="active"' : ''}>${link.title}</button>`
        )
        .join("");
    }

    connectedCallback(){
        this.render();
        this.eListeners();
    }

    eListeners(){
        let buttons = this.shadowRoot.querySelectorAll("button");
        buttons.forEach(btn => btn.addEventListener("click", (e) => {
            buttons.forEach(btn => btn.removeAttribute("id"));
            e.target.id = "active";
            //byt innehåll
        }))
    };
    render(){
        this.shadowRoot.innerHTML =`
        <style>
            .sub-nav{
                width: 300px;
                height:40px;
                display: flex;
                gap: 8px;
                margin: 0;

            }

            .sub-nav button{
                border: 1px solid var(--color-gray-30);
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                background-color: var(--color-gray-100);
                border-radius: 16px 16px 0 0;
                box-shadow: inset 0 -1em 2em rgb(0 0 0 / 30%),
                -0.1em -0.1em 0.5em rgba(0, 0, 0, 0.134);
                border-bottom: none;
                min-width: 80px;
                max-width: fit-content;
                height: 30px;
                padding: 4px 16px;
                text-align: center;
            }

            #active{
                 box-shadow: -0.3em -0.3em 0.5em rgba(0, 0, 0, 0.211);
            }
        </style>
        <div class="sub-nav">
            ${this.renderButtons()}
        </div> 
        `;
    }
}

customElements.define("sub-navigation", SubNavigation);