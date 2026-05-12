class clientRouter {
    
    setNewURL(path) {
        window.history.pushState({}, "", path);
        console.log("UPDATED URL", path)
        this.handleRoute();
    }

    handleRoute() {
        
        const path = window.location.pathname;
        console.log(path);

        if (path.startsWith("/")) {
            switch (path) {
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
                case "/remoteDesktop":
                    content.innerHTML = "<remote-desktop-view></remote-desktop-view>";
                    break;
                default:
                    content.innerHTML = "<about-view></about-view>";
                    break;
            }
        } else if (path.startsWith("/remoteDesktop")) {
            const main = document.querySelector("main");
            main.innerHTML = "<remote-desktop-view></remote-desktop-view>";
        }
    }
}

export const ClientRouter = new clientRouter();
window.addEventListener("load", () => ClientRouter.handleRoute());
window.addEventListener("popstate", () => ClientRouter.handleRoute());