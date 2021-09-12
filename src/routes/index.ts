import { ServerRoute } from "@hapi/hapi";
import { userRoutes } from "./user";
import { adminRoutes } from "./v1/admin";

const Routes: ServerRoute[] = [];
const routes = (
  routeArray: ServerRoute[],
  prefix: string,
) => {
  routeArray.map((route) => {
    route.path = `${prefix}${route.path && route.path!=="/"?route.path:""}`;
    Routes.push(route);
  });
};

routes(userRoutes, "/user");
routes(adminRoutes, "/admin");

export {Routes}