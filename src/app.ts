import * as http from "https://deno.land/std/http/server.ts";

const PORT = 8080
const HOSTNAME = "0.0.0.0"

const server = http.serve({ port: PORT, hostname: HOSTNAME })

console.log(`Server now running at http://${HOSTNAME}:${PORT}`)

for await (const req of server) {
    req.respond({ body: "Hello world", status: 200 })
    console.log(req)
}