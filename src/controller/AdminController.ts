import { Request, ResponseToolkit } from "@hapi/hapi";

class AdminController {
    async getAdminData(request: Request, h: ResponseToolkit){
        try{
            return h.response({status: "success", message: "Admin Data"});
        }catch(error){
            return h.response({status: "error", message: error}).code(500);
        }
    }
};

const adminController = new AdminController();

export {adminController};