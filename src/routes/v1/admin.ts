import { ServerRoute } from "@hapi/hapi";

export const adminRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/",
    handler: () => "Hello World admin",
  },
  {
    method: "GET",
    path: "/abc",
    handler: () => "Hello World admin abc",
  },
];
