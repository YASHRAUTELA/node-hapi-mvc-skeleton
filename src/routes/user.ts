import { ServerRoute } from "@hapi/hapi";
import { userController } from "../controller/UserController";

const userRoutes: ServerRoute[] = [
    {
        method: "GET",
        path: "/user",
        handler: userController.getUserData,
    },
];

export { userRoutes };
