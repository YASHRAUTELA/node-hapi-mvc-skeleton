import { ServerRoute } from "@hapi/hapi";

export const userRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/",
    handler: () => "Hello World user",
  },
  {
    method: "GET",
    path: "/abc",
    handler: () => "Hello World abc",
  },
];
