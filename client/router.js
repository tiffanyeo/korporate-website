
class clientRouter {

    setNewURL(path) {
        console.log("CLIENT ROUTER PATH:", path)
        window.history.pushState({}, "", path);
        this.handleRoute();
    }



    handleRoute() {
        
        const path = window.location.pathname;
        console.log("CLIENT ROUTER PATH:", path)
        switch (path) {
            case "/":
            case "/home":
            this.setNewURL(path);
                console.log("FRONTEND: render home");
                // HomeView.render();
                break;

            case "/remoteDesktop":
                this.setNewURL(path);
                console.log("FRONTEND: render remote");
                break;

            default:
                this.setNewURL(path);
                console.log("FRONTEND: not found");
                break;
        }
    }
}

export const ClientRouter = new clientRouter();

// Run when init and back/forward
window.addEventListener("load", () => ClientRouter.handleRoute());
window.addEventListener("popstate", () => ClientRouter.handleRoute());