
class clientRouter {

    setNewURL(path) {

        const currURL = window.location.pathname;

        // SPA (index.html)
        if (currURL.includes(path)) {
            window.history.pushState({}, "", path);
            return;
        } else {
            
            // ROUTING IMBETWEEN (index.html/remoteDesktop.html)
            window.history.pushState({}, "", path);
            //fetch(path);
            fetch("https://en.wikipedia.org/wiki/Main_Page");
            this.handleRoute(path);
        }

    }




    handleRoute(href) {

        if (href) window.location.href = href;
    }
}

export const ClientRouter = new clientRouter();

// Run when init and back/forward
window.addEventListener("load", () => ClientRouter.handleRoute());
window.addEventListener("popstate", () => ClientRouter.handleRoute());