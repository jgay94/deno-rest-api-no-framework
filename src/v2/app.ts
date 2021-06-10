import { listenAndServe } from "https://deno.land/std/http/server.ts";
import router, { notFound } from "./routes/router.ts";

listenAndServe({ port: 8080 }, async (req) => {
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
  const buffer = await Deno.readAll(req.body);
  const decoder = new TextDecoder();
  const body = decoder.decode(buffer);
  console.log(`body: ${body}`);

  /**
   * 5. route request
   */
  const data = { body: JSON.parse(body), params };
  const routeHandler = router[pathname] && router[pathname][method]
    ? router[pathname][method]
    : notFound;

  routeHandler(req, data);
});

console.log(`Server is running at port 8080`);
