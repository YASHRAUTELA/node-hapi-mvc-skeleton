import { ServerRoute } from "@hapi/hapi";
import { userRoutes } from "./user";
import { adminRoutes } from "./admin";
let Routes: ServerRoute[] = [];
export default Routes.concat(userRoutes, adminRoutes);