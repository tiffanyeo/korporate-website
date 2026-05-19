import { ClientRouter } from "../../../../router.js";

/* 
<my-pages ceo=bool ></my-pages>
*/

class MyPages extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.isCEO = this.getAttribute("ceo") === "true";
    }

    connectedCallback() {
        this.render();
        this.eListeners();
    }

    style() {
        return `
            #container{
                margin: 0 30px;
                background: var(--color-gray-100);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
                
            h1{
                margin: 0;
                font-size: 14px;
            }
            h3{
                font-size: 11px;
                margin: 0;
            }
            .wide {
                letter-spacing: 12%;
            }
            p{
                margin: 0;
                font-size: 12px;
            }
            .yellow{
                margin: 0;
                background: var(--color-yellow-100);
                color: var(--color-yellow-160);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content{
                padding: 2px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content p{
                line-height: 1.5;
            }
            
            .message {
            background: #d6d3ce;
            border: 1px solid #7a7a7a;
            padding: 12px;
            margin-bottom: 10px;
            font-family: Tahoma, sans-serif;
            font-size: 12px;
            color: #000;
            box-shadow: inset 1px 1px 0 #fff;
        }

        .unread {
            background: #e7edf7;
        }

        .title {
            margin: 0 0 6px 0;
            font-size: 13px;
            color: #003399;
            font-weight: bold;
        }

        .mailMeta {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #555;
            margin-bottom: 10px;
            border-bottom: 1px solid #b1b1b1;
            padding-bottom: 4px;
        }

        .messageContent {
            line-height: 1.5;
        }

        .hackButton {
            display: inline-block;
            margin-top: 12px;
            padding: 7px 14px;

            background: linear-gradient(#3d94ff, #1766d1);
            border: 1px solid #0b3f91;
            border-radius: 3px;

            color: white;
            text-decoration: none;
            font-size: 12px;
            font-weight: bold;
            font-family: Tahoma, sans-serif;

            cursor: pointer;

            box-shadow:
                inset 1px 1px 0 rgba(255, 255, 255, 0.5),
                1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .hackButton:hover {
            background: linear-gradient(#54a3ff, #2a75db);
        }
        `;
    }

    render() {
        if (this.isCEO) {
            // CEO VIEW
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
                <header-elem intranet="true"></header-elem>
                <intranet-main-navigation ceo="true"></intranet-main-navigation>
                <div id="container">
                
                    <div id=inbox>
                        <div class="yellow">
                            <h1>Systemlogg</h1>
                        </div>

                        <div class="message unread">
                            <h4 class="title">Vi har koll på dig Mr. Carl.</h4>
                            <div class="mailMeta">
                                <span class="sender">unknown@hidden.net</span>
                                <span class="date">2026-04-11 02:47</span>
                            </div>
                            <p class="messageContent">
                                Du verkar ha glömt kopplingen mellan din gamla dator och din nya?<br><br>

                                Den må samla damm på vinden men allt gick att spåra genom den. Täpper du inte till dina läckor bättre än så?<br><br>

                                Vi har haft full åtkomst till dina filer, kameror och konton längre än du tror. Dina “affärer” har vi haft full insyn i länge. Frågan är bara vem som får informationen först.<br><br>

                                Var på tårna.
                            </p>
                            <button class="hackButton"> We already took over your computer </button>

                        </div>

                        <div class="message">
                            <h4 class="title">New access point acquired</h4>
                            <div class="mailMeta">
                                <span class="sender">ops@korporate-internal.net</span>
                                <span class="date">2014-11-18 12:14</span>
                            </div>
                            <p class="messageContent">
                                You successfully compromised a new user:
                                Sandra Petrov.<br><br>
                                Access level: INTERNAL STAFF<br>
                                Mail sync: ACTIVE
                            </p>
                        </div>

                        <div class="message">
                            <h4 class="title">Camera feed online</h4>
                            <div class="mailMeta">
                                <span class="sender">surveillance@korporate-internal.net</span>
                                <span class="date">2014-01-19 11:03</span>
                            </div>
                            <p class="messageContent">
                                Remote webcam access established.<br><br>
                                No user activity detected.<br>
                                Background file scan completed.
                            </p>
                        </div>

                        <div class="message">
                            <h4 class="title">Financial archive copied</h4>
                            <div class="mailMeta">
                                <span class="sender">vault@korporate-internal.net</span>
                                <span class="date">2004-11-20 03:41</span>
                            </div>
                            <p class="messageContent">
                                248 documents copied from local archive.<br><br>
                                Hidden transactions flagged for review.<br>
                                Awaiting further instructions.
                            </p>
                        </div>
                    </div>
                    
                    <div id=sign-out>
                        <div class="yellow">
                            <h1>Logga ut</h1>
                        </div>
                        <sign-out-elem></sign-out-elem>
                    </div>
                    
                </div>
            `;
        } else {
            // STAFF VIEW
            this.shadowRoot.innerHTML = `
                <style>${this.style()}</style>
                <header-elem intranet="true"></header-elem>
                <intranet-main-navigation ceo="false"></intranet-main-navigation>
                <div id="container">
                    <div id=inbox>
                        <div class="yellow">
                            <h1>Systemlogg</h1>
                        </div>
                        <div class="message">
                            <h4 class="title">Your account has been created</h4>
                            <div class="mailMeta">
                                <span class="sender">carl.nielsen.korporate@gmail.com</span>
                            </div>
                            <p class="messageContent">
                                No message.
                            </p>
                    </div>
                </div>
                
                <div id=sign-out>
                    <div class="yellow">
                        <h1>Logga ut</h1>
                    </div>
                    <sign-out-elem></sign-out-elem>
                </div>
            </div>
            `;
        }
    }

    eListeners() {

        // START REMOTE DESKTOP
        const hackerBtn = this.shadowRoot.querySelector(".hackButton");
        
        if (hackerBtn) {
            hackerBtn.addEventListener("click", () => {
                this.routing("/remoteDesktop");
            });
        }

    }

    routing(path) {
        // NEW VIEW
        ClientRouter.setNewURL(path)
    }

}

customElements.define("my-pages", MyPages);