import * as http from "https://deno.land/std/http/server.ts";
import { ServerRequest } from "https://deno.land/std/http/server.ts";

interface ICreateServerDependencies {
    configuration: {
        port: number,
        hostname: string,
    },
}

export async function createServer({ configuration: { port, hostname } }: ICreateServerDependencies) {
    const server = http.serve({ port, hostname })

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

    console.log(`Server now running at http://${hostname}:${port}`)

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
}