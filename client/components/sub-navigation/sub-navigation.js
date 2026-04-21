/*
Exempel på hur man använder sub-navigationen
<sub-nav id="myNav"></sub-nav>

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
        this._buttons;

    }

    set buttons(value){
        this._buttons = value;
        this.render();
    }

    renderButtons(){
        let html = ``;
        this._buttons.forEach(link => html.push(`<button>${link.title}</button>`));
        return html;
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
                width: 500px;
                height:fit-content;
                display: flex;
                gap: 8px;
                margin: 0;

            }

            .sub-nav button{
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                background-color: white;
                border-radius: 16px 16px 0 0;
                box-shadow: inset 0 -1em 2em rgb(0 0 0 / 30%),
                -0.1em -0.1em 0.5em rgba(0, 0, 0, 0.134);
                border-bottom: none;
                width: 80px;
                height: 16px;
                padding: 4px 8px;
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