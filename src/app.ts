import * as http from "https://deno.land/std/http/server.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";

const PORT = 8080
const HOSTNAME = "0.0.0.0"

const server = http.serve({ port: PORT, hostname: HOSTNAME })

console.log(`Server now running at http://${HOSTNAME}:${PORT}`)

function handleContact(req:ServerRequest) {
    req.respond({ body: "This is the contact page", status: 200 })
}

function handleAbout(req:ServerRequest) {
    req.respond({ body: "This is the about page", status: 200 })
}

function handleIndex(req:ServerRequest) {
    req.respond({ body: "This is the home page", status: 200 })
}

function handleNotFound(req:ServerRequest) {
    req.respond({ body: "Page not found", status: 404 })
}

for await (const req of server) {
    if (req.url === "/contact" && req.method === "GET")
        handleContact(req)
    else if (req.url === "/about" && req.method === "GET")
        handleAbout(req)
    else if (req.url === "/" && req.method === "GET")
        handleIndex(req)
    else
        handleNotFound(req)
    
    console.log(`${req.method} ${req.url}`)
}