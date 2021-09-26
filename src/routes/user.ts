import { ServerRoute } from "@hapi/hapi";
import { userController } from "../controller/UserController";
export const userRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/user",
    handler: userController.getUserData,
  },
];
