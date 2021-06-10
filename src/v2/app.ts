import { listenAndServe } from "https://deno.land/std/http/server.ts";

listenAndServe({ port: 8080 }, (req) => {
  /**
   * 1. parse pathname:
   * 2. parse http method
   * 3. parse query string, if any
   * 4. parse body
   */

  console.log(req);

  req.respond({
    body: "Hello from the server",
  });
});

console.log(`Server is running at port 8080`);
