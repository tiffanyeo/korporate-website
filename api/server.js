import { APIRouter } from "./router.js";

class server {

    constructor() {
        this.router = APIRouter;
    }

    corsMiddleware(req) {
        // Handle preflight
        if (req.method === "OPTIONS") {
            const resp = new Response(null, {
                status: 204,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            });
            return resp;
        }
        return null;
    }

    handler() {
        Deno.serve((req) => {
            // Preflight
            const cors = this.corsMiddleware(req);
            if (cors) return cors;
            
            // Rendering OK?
            const result = this.router.handleRoute(req.url);
            return this.controller(result);
        });
    }

    controller(result) {
        if (result) return result;
        return new Response(null, {
            status: 200,
            headers: {
                "Content-Type": "text/html"
            }
        });
    }

}

export const Server = new server();