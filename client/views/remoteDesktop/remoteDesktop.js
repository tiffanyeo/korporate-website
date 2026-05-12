import { startClock } from "./utils/time.js";
import { playAudio } from "./utils/playAudio.js";
import { FooterElem } from "./components/footer-elem/footer-elem.js";
import { selectionMarking } from "./features/selectionMarking/selectionMarking.js";
import { NotesApp } from "./components/notes/notes.js";
import { ArticleApp } from "./components/notes/article.js";
import { DesktopElement } from "./components/desktop-apps-elem/desktop-apps-elem.js"

class RemoteDesktopView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.init();
    }

    style() {
        return `
            @font-face {
                font-family: LibreFranklin;
                src: url("/views/assets/fonts/regular/LibreFranklin-Regular.ttf");
            }

            :host {
                display: block;
                font-family: LibreFranklin;
            }

            .desktop {
                max-width: 430px;
                min-height: 932px;
                background-image: url("/views/assets/images/windows-background.jpg");
                background-size: auto 120%;
                background-repeat: no-repeat;
                background-position: right 69% top 0%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            #desktop-icons{
                display: grid;
                grid-auto-rows: 80px;
                grid-template-columns: 80px;
                padding: 24px 0 0 20px;
                grid-gap: 8px;
                height: calc(100% - 30px);
                place-content: start start;
            }

            #selectMarking {
                position: absolute;
                border: 1px solid #3399ff;
                background: rgba(51, 153, 255, 0.2);
                display: none;
                pointer-events: none;
                z-index: 999;
            }

            #content {
                height: 100%;
                width: 100%;
                display: grid;
                grid-template-areas:
                    "app1 content content content"
                    "app2 content content content"
                    "content content content content"
                    "content content content content"
                    "footer footer footer footer";
                grid-template-columns: 1fr;
            }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>${this.style()}</style>
            <audio id="loadingAudio" src="/views/assets/audio/windows-loading-audio.mp3" preload="auto"></audio>
            <audio id="errorAudio" src="/views/assets/audio/windows-error-audio.mp3"></audio>
            <div class="desktop">
                <div id="desktop-icons">
                    <desktop-element imgpath="/views/assets/icons/app-icon-notes.png" name="Notes" app="notes"></desktop-element>
                    <desktop-element imgpath="/views/assets/icons/app-icon-notes.png" name="Artikel" app="article"></desktop-element>
                </div>
                <div id="selectMarking"></div>
                <div id="content">
                </div>
                <footer-elem></footer-elem>
            </div>
        `;
    }

    init() {
        playAudio.loading(this.shadowRoot);
        selectionMarking(this.shadowRoot);
    }
}

customElements.define("remote-desktop-view", RemoteDesktopView);