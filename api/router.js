

// Något till fjärrdatorn

class apiRouter {

    async handleRoute(url) {
        const path = new URL(url).pathname;

        switch (path) {
            case "/":
            case "/home":
                return await this.serveFile("../client/index.html");

            case "/remoteDesktop":
                return await this.serveFile("../client/views/remoteDesktop/remoteDesktop.html");

            default:
                return new Response("Not found", { status: 404 });
        }
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