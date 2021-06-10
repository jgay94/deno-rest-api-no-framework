import { listenAndServe } from "https://deno.land/std/http/server.ts";

listenAndServe({ port: 8080 }, (req) => {
  /**
   * 1. parse pathname
   */
  const parsedUrl = req.url.replace(/\/+$/g, "").split("?");
  const pathname = parsedUrl[0] || "/";
  console.log(`pathname: ${pathname}`);

  /**
   * 2. parse http method
   */
  const method = req.method.toLowerCase();
  console.log(`method: ${method}`);

  /**
   * 3. parse query string
   */
  const params = new URLSearchParams(parsedUrl[1]);
  console.log(`page: ${params.get("page")}`);
  console.log(`limit: ${params.get("limit")}`);

  /**
   * 4. parse body
   */

  req.respond({
    body: "Hello from the server",
  });
});

console.log(`Server is running at port 8080`);
