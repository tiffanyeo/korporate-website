class MenuItem extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    

    connectedCallback(){
        this.name = this.getAttribute("name") || null;
        this.imgpath = this.getAttribute("imgpath") || "views/assets/icons/app-icon-folder.png";
        this.app = this.getAttribute("app") || "none";
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>
                .item {
                    display: flex;
                    gap: 6px;
                    align-items: center;
                }
                .item:hover{
                    background-color: #0f61cb;
                    .Names p{
                        color: #FBFBFA;
                    }

                    
                }
                .img-Con{
                    background-image: url(${this.imgpath});
                    background-size: 80px;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 50px;
                    height: 50px;
                }
                .Names p {
                    font-size: 12px;
                    margin: 0;
                    line-height: 1.1;
                    color: var(--color-gray-140)
                }
                .Names p:first-child {
                    color: black;
                    font-weight: bold;
                }
            </style>

            <div class="item">
                <div class="img-Con"></div>
                <div class="Names">
                    <p><b>${this.app}</b>
                    ${this.name ? `<p>${this.name}</p>` : ""}
                </div>
            </div>
        `;
    }
}

customElements.define("menu-item", MenuItem);