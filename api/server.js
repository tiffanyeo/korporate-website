import { Router } from "./router";

class server {

    constructor() {
        this.router = Router;
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
            const cors = corsMiddleware(req);
            if (cors) return cors; // If preflight
            return this.router.handleRoute(req.url);
        })
    }

}

export const Server = new server();