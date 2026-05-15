class clientRouter {

    setNewURL(path) {
        window.history.pushState({}, "", path);
        console.log("UPDATED URL", path)
        this.handleRoute();
    }

    handleRoute() {

        const main = document.querySelector("main");
        const content = document.querySelector("#content");
        const path = window.location.pathname;

        switch (path) {
            // CLEARS CONTENT
            case "/":
                content.innerHTML = "<about-view></about-view>";
                break;
            case "/about":
                content.innerHTML = "<about-view></about-view>";
                break;
            case "/news":
                content.innerHTML = "<news-view></news-view>";
                break;
            case "/contact":
                content.innerHTML = "<contact-view></contact-view>";
                break;
            case "/intranet":
                content.innerHTML = "<intranet-view></intranet-view>";
                break;

            // CLEARS MAIN
            case "/staffIntranet":
                main.innerHTML = `<staff-intranet ceo="false"></staff-intranet>`;
                break;
            case "/staffIntranetCEO":
                main.innerHTML = `<staff-intranet ceo="true"></staff-intranet>`;
                break;
            case "/myPages":
                main.innerHTML = `<my-pages ceo="false"></my-pages>`;
                break;
            case "/myPagesCEO":
                main.innerHTML = `<my-pages ceo="true"></my-pages>`;
                break;
            case "/remoteDesktop":
                main.innerHTML = "<remote-desktop-view></remote-desktop-view>";
                break;

            default:
                content.innerHTML = "<about-view></about-view>";
                break;
        }
    }
}

export const ClientRouter = new clientRouter();
window.addEventListener("load", () => ClientRouter.handleRoute());
window.addEventListener("popstate", () => ClientRouter.handleRoute());