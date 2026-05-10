class clientRouter {
    
    setNewURL(path) {
        window.history.pushState({}, "", path);
        this.handleRoute();
    }

    handleRoute() {
        
        const path = window.location.pathname;

        if (path.startsWith("/home")) {
            switch (path) {
                case "/home":
                    content.innerHTML = "<about-view></about-view>";
                    break;
                case "/home/about":
                    content.innerHTML = "<about-view></about-view>";
                    break;
                case "/home/news":
                    content.innerHTML = "<staff-view></staff-view>";
                    break;
                case "/home/contact":
                    content.innerHTML = "<staff-view></staff-view>";
                    break;
                case "/home/staff":
                    content.innerHTML = "<staff-view></staff-view>";
                    break;
                default:
                    content.innerHTML = "<about-view></about-view>";
                    break;
            }
        } else if (path.startsWith("/remoteDesktop")) {
            content.innerHTML = "<remote-desktop-view></remote-desktop-view>";
        }
    }
}

export const ClientRouter = new clientRouter();
window.addEventListener("load", () => ClientRouter.handleRoute());
window.addEventListener("popstate", () => ClientRouter.handleRoute());