import { createServer } from "./web/server.ts";

createServer({
    configuration: {
        port: 8080,
        hostname: "0.0.0.0"
    }
})