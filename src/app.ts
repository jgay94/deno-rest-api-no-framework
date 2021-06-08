import { createServer } from "./web/server.ts";

if (import.meta.main) {
    createServer({
        configuration: {
            port: 8080,
            hostname: "0.0.0.0"
        }
    })
}