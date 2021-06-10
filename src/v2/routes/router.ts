import { ServerRequest } from "https://deno.land/std/http/server.ts";

const router: {
  [key: string]: {
    [key: string]: (
      req: ServerRequest,
      data: { body: Record<string, unknown>; params: URLSearchParams },
    ) => void;
  };
} = {
  "/products": {
    get: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ message: "this is the products.get route" }),
      });
    },
    post: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ message: "this is the products.post route" }),
      });
    },
  },
  "/users": {
    get: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ message: "this is the users.get route" }),
      });
    },
    post: (req, data) => {
      req.respond({
        status: 200,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ message: "this is the users.post route" }),
      });
    },
  },
};

export default router;

export const notFound = (req: ServerRequest) => {
  req.respond({
    status: 404,
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: "not found",
  });
};
