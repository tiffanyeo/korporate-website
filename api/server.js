import { APIRouter } from "./router.js";

class server {

    constructor() {
        this.router = APIRouter;
    }

    corsMiddleware(req) {
        // Handle preflight
        if (req.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            });
        }
        return null;
    }

    controller(result) {

        if (result instanceof Response) return result;

        return new Response(null, {
            status: 200,
            headers: {
                "Content-Type": "text/html"
            }
        });
    }

    handler() {
        Deno.serve(
            { port: Number(Deno.env.get("PORT")) || 8000 },
            async (req) => {

                // Preflight
                const cors = this.corsMiddleware(req);
                if (cors) return cors;

                // Rendering OK?
                const result = await this.router.handleRoute(req.url);
                return this.controller(result);
            });
    }

}

export const Server = new server();