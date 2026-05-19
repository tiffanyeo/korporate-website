
class ContactView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    style() {
        return `
            #container {
                margin: 0 30px;
                background: var(--color-gray-100);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            h1 {
                margin: 0;
                font-size: 14px;
            }
            h3 {
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
            .blue {
                margin: 0;
                background: var(--color-blue-120);
                color: var(--color-gray-100);
                padding: 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content {
                padding: 2px;
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .content p {
                line-height: 1.5;
            }
            
            .container {
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: var(--color-gray-90);
                padding: 16px;
                border-radius: 8px;
            }

            label {
                font-size: 12px;
                font-weight: 600;
                color: var(--color-gray-10);
                margin-bottom: 4px;
            }

            input[type="text"],
                select,
                textarea {
                    width: 100%;
                    padding: 10px 12px;
                    font-size: 12px;
                    border-radius: 6px;
                    border: 1px solid var(--color-gray-40);
                    background: var(--color-gray-30);
                    color: var(--color-gray-0);
                    box-sizing: border-box;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }

                input[type="text"]:focus,
                select:focus,
                textarea:focus {
                    border-color: var(--color-blue-120);
                    box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.25);
                    outline: none;
                }

                .submit-btn {
                    margin-top: 12px;
                    background: var(--color-gray-120);
                    color: var(--color-gray-100);
                    padding: 12px;
                    border: none;
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s ease;
                }

                .no-msg {
                    text-align: center;
                    color: var(--color-gray-140);
                }
        `;
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>${this.style()}</style>
        <div id="container">
            <div class="blue">
                <h1>Kontakta oss</h1>
            </div>
            <div class="content">
            <div class="container">

                <label for="fname">Förnamn</label>
                <input type="text" id="fname" name="firstname" placeholder="Ditt förnamn..">

                <label for="lname">Efternamn</label>
                <input type="text" id="lname" name="lastname" placeholder="Ditt efternamn..">
                
                <label for="lname">Email</label>
                <input type="text" id="email" name="email" placeholder="Din email..">
                
                <label for="lname">Telefonummer</label>
                <input type="text" id="Telefonummer" name="Telefonummer" placeholder="Ditt telefonummer..">

                <label for="subject">Ämne</label>
                <select id="country" name="country">
                    <option value="Allmänt">Allmänt</option>
                    <option value="Allmänt">Offert</option>
                    <option value="Allmänt">Produkt</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Ditt meddelande.." style="height:200px"></textarea>


                <button disabled class="submit-btn">Skicka</button>
                <p class="no-msg">Vi tar inte emot några förfrågningar just nu.</p>

            </form>
            </div>
            </div>
        </div>
        `;
    }

}
customElements.define("contact-view", ContactView);