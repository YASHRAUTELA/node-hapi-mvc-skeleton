import { Request, ResponseToolkit } from "@hapi/hapi";

class UserController {
    getUserData = async (request: Request, h: ResponseToolkit) => {
        try {
            return h.response({ status: "success", message: "User Data" });
        } catch (error) {
            return h.response({ status: "error", message: error }).code(500);
        }
    };
}

const userController = new UserController();

export { userController };
