
// IMPORT VIEWS
// Något till fjärrdatorn

class router {

    constructor() {
        this.requestUrl = null;
    }

    setNewURL(path) {
        window.history.pushState({}, "", path);
        this.handleRoute()
    }

    handleRoute() {

        this.requestUrl = window.location.pathname;

        switch (this.requestUrl) {
            case "/":
            case "/home":
                //HomeView.render();
                console.log("RENDER HOME");
                break;

            case "/remoteDesktop":
                console.log("RENDER REMOTE");
                break;

            default:
                console.log("NOT FOUND");
                break;
        }
    }
}

export const Router = new router();

// Run when init and back/forward
window.addEventListener("load", () => Router.handleRoute());
window.addEventListener("popstate", () => Router.handleRoute());