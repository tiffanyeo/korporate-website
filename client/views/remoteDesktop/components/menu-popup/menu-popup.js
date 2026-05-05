export class MenuPopup extends HTMLElement{
    constructor(){
        super();
        
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        
        <style>
            #menu {
                display: flex;
                flex-direction: column;
                z-index: 1000;
                position: absolute;
                background-color: white;
                width: 300px;
                height: 400px;
                bottom:40px;
                left: 0;
            }
            .menu-border{
                padding: 7px 8px;
                background: linear-gradient(180deg,
                    rgba(9, 151, 255, 1) 0%,
                    rgba(0, 83, 238, 1) 8%,
                    rgba(0, 80, 238, 1) 40%,
                    rgba(0, 102, 255, 1) 88%,
                    rgba(0, 102, 255, 1) 93%,
                    rgba(0, 91, 255, 1) 95%,
                    rgba(0, 61, 215, 1) 96%,
                    rgba(0, 61, 215, 1) 100%);
            }
            .user-icon{
                width: 40px;
                height: 40px;
                background-image: url(views/remoteDesktop/assets/icons/Korporate-Symbol-1.png);
                background-size: cover;
                background-position: center;
                border-radius: 2px;
            }
            .menu-middle{
                display: flex;
                flex-grow: 2;
            }
            .menu-bottom{
                
                display: flex;
                gap: 8px;
                justify-content: flex-end;
            }

            .menu-btm-btn{
                cursor: default;
                display: flex;
                align-items: center;
                gap: 4px;
            }
            .menu-btm-btn img{
                width: 24px;
                height: 24px;
            }
            .menu-btm-btn p{
                margin: 0;
                color: white;
                font-size: 11px;
                font-weight: lighter;
            }
            .btn-wrapper{
                position: relative;
                display: inline-block;
            }
            .hover-overlay{
                position: absolute;
                inset: 0;
                background: rgba(255, 255, 255, 0.15);
                margin: 0 auto;
                width: 22px;
                height: 23px;
                border-radius: 2px;
                display: none;
                pointer-events: none;
            }
            .btn-wrapper:hover .hover-overlay{
                display: block;
            }
            .menu-middle-column{
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            #menu-middle-left{
                z-index: 10;
                width: 320px;
                border-right: 0.5px solid rgba(0, 0, 0, 0.52);
                box-shadow: 1px 0 1px rgba(0, 0, 0, 0.23);
            }
            #menu-middle-right{
                width: 280px;
                background-color: #e6faff;
            }
        </style>

        <div id="menu">
            <div class="menu-top menu-border">
                <div class="user-icon">
                    
                </div>
            </div>
            <div class="menu-middle">
                <div class="menu-middle-column" id="menu-middle-left"></div>
                <div class="menu-middle-column" id="menu-middle-right"></div>
            </div>
            <div class="menu-bottom menu-border">
                <div class="menu-btm-btn">
                    <div class="btn-wrapper">
                        <img src="/views/remoteDesktop/assets/icons/LogOff.png">
                        <div class="hover-overlay"></div>
                    </div>
                    <p>Log Off</p>
                </div>
                <div class="menu-btm-btn">
                    <div class="btn-wrapper">
                        <img src="/views/remoteDesktop/assets/icons/ShutDown.png">
                        <div class="hover-overlay"></div>
                    </div>
                    <p>Shut Down</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("menu-popup", MenuPopup)