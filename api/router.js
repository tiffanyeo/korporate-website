class apiRouter {

    async handleRoute(url) {
        
        const path = new URL(url).pathname;

        // HTML ROUTES
        if (path === "/" || path === "/home") return await this.serveFile("../client/index.html");
        if (path === "/remoteDesktop") return await this.serveFile("../client/views/remoteDesktop/remoteDesktop.html");

        // STATIC FILES
        if (
            path.startsWith("/assets/") ||
            path.endsWith(".js") ||
            path.endsWith(".css") ||
            path.endsWith(".png") ||
            path.endsWith(".mp3") ||
            path.endsWith(".ttf") ||
            path.endsWith(".ico")
        ) return await this.serveStatic(path);

        // DEFAULT 
        return new Response("Not found", { status: 404 });
    }


    async serveFile(relativePath) {
        
        // HTML OK
        const fileUrl = new URL(relativePath, import.meta.url);
        const file = await Deno.readTextFile(fileUrl);

        return new Response(file, {
            status: 200,
            headers: { "Content-Type": "text/html" }
        });
    }


    async serveStatic(path) {
        
        // STATIC OK
        const fileUrl = new URL("../client" + path, import.meta.url);

        try {
            const file = await Deno.readFile(fileUrl);
            const mime = this.getMime(path);

            if (!mime) {
                return new Response("Not found", { status: 404 });
            }

            return new Response(file, {
                status: 200,
                headers: { "Content-Type": mime }
            });

        } catch {
            return new Response("Not found", { status: 404 });
        }
    }


    getMime(path) {
        if (path.endsWith(".js")) return "application/javascript";
        if (path.endsWith(".css")) return "text/css";
        if (path.endsWith(".png")) return "image/png";
        if (path.endsWith(".mp3")) return "audio/mpeg";
        if (path.endsWith(".ttf")) return "font/ttf";
        if (path.endsWith(".ico")) return "image/x-icon";
        return null; 
    }
}

export const APIRouter = new apiRouter();
