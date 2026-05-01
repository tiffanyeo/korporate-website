import { APIRouter } from "../api/router";

class clientRouter {

    setNewURL(path) {
        window.history.pushState({}, "", path);
        this.handleRoute();
    }

    handleRoute() {
        const path = window.location.pathname;
        switch (path) {
            case "/":
            case "/home":
                setNewURL(path);
                console.log("FRONTEND: render home");
                // HomeView.render();
                break;

            case "/remoteDesktop":
                setNewURL(path);
                console.log("FRONTEND: render remote");
                break;

            default:
                setNewURL(path);
                console.log("FRONTEND: not found");
                break;
        }
    }
}

export const ClientRouter = new clientRouter();

// Run when init and back/forward
window.addEventListener("load", () => Router.handleRoute());
window.addEventListener("popstate", () => Router.handleRoute());