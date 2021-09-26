import { ServerRoute } from "@hapi/hapi";
import { adminController } from "../controller/AdminController";

export const adminRoutes: ServerRoute[] = [
  {
    method: ["GET","POST"],
    path: "/admin",
    handler: adminController.getAdminData,
  },
];
