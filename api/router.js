
class apiRouter {

    async handleRoute(url) {
        const path = new URL(url).pathname;
        switch (path) {
            case "/":
            case "/home":
                // Stop the rerendering of index when app-content is loaded?
                return await this.serveFile("../client/index.html");

            case "/remoteDesktop":
                return await this.serveFile("../client/views/remoteDesktop/remoteDesktop.html");

            // Serv all static files too
            case path.startsWith("/assets/"):
            case path.endsWith(".js"):
            case path.endsWith(".css"):
            case path.endsWith(".png"):
            case path.endsWith(".mp3"):
            case path.endsWith(".ttf"):
                return await this.serveStatic(path);

            default:
                return new Response("Not found", { status: 404 });
        }
    }

    async serveStatic(path) {
        const fileUrl = new URL("../client" + path, import.meta.url);

        try {
            const file = await Deno.readFile(fileUrl);

            return new Response(file, {
                status: 200,
                headers: {
                    "Content-Type": this.getMime(path)
                }
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
        return "application/octet-stream";
    }

    async serveFile(relativePath) {
        const fileUrl = new URL(relativePath, import.meta.url);
        const file = await Deno.readTextFile(fileUrl);

        return new Response(file, {
            status: 200,
            headers: {
                "Content-Type": "text/html"
            }
        });
    }
}

export const APIRouter = new apiRouter();