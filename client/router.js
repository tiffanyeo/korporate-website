
class clientRouter {

    setNewURL(path) {
        console.log("CLIENT ROUTER PATH:", path)
        window.history.pushState({}, "", path);
        this.handleRoute();
    }



    handleRoute() {
        console.log("HANDLE ROUTE START");

        const path = window.location.pathname;
        console.log("CLIENT ROUTER PATH:", path)
        switch (path) {
            case "/":
            case "/home":
                console.log("FRONTEND: render home");
                // HomeView.render();
                break;

            case "/remoteDesktop":
                console.log("FRONTEND: render remote");
                break;

            default:
                console.log("FRONTEND: not found");
                break;
        }
    }
}

export const ClientRouter = new clientRouter();

// Run when init and back/forward
window.addEventListener("load", () => ClientRouter.handleRoute());
window.addEventListener("popstate", () => ClientRouter.handleRoute());