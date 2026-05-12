export class DesktopElement extends HTMLElement{
    connectedCallback(){
        this.name = this.getAttribute("name") || "Unnamed";
        this.imgpath = this.getAttribute("imgpath") || "../../assets/icons/app-icon-folder.png";
        this.app = this.getAttribute("app") || "none";
        this.render();
    }

    eListeners(){
        const root = this.getRootNode();
        const content = root.querySelector("#content");

        const desktop = root.querySelector(".desktop");
        const icons = desktop.querySelectorAll("desktop-element");
        icons.forEach(icon => icon.addEventListener("click", ()=>{
            const app = icon.getAttribute("app");
            if (app === "notes") {
                content.appendChild(document.createElement("notes-app"));
            }

            if (app === "article") {
                content.appendChild(document.createElement("article-app"));
            }
        }))

    }

    render(){
        this.innerHTML = `
            <style>
                .desktop-icon {
                    height: 80px;
                    width: 80px;
                    padding: 8px;
                    align-items: center;
                    border: 1px solid transparent;
                    border-radius: 3px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    z-index: 5;
                    cursor: default;
                }
                
                .desktop-icon:hover {
                    background: rgba(255, 255, 255, 0.21)
                }

                .desktop-icon img {
                    width: 60px;
                    height: 60px;
                }

                .desktop-icon span {
                    margin-top: 4px;
                    text-align: center;
                    color: white;
                    text-shadow: 1px 1px 2px black;
                }
            </style>

            <div class="desktop-icon">
                <img src="${this.imgpath}">
                <span>${this.name}</span>
            </div>
        `;
        this.eListeners();
    }
}
customElements.define("desktop-element", DesktopElement);
