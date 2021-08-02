import { getAdmin, getAllAdmins } from "../controllers/AdminController";
import { admin } from "../types";

/**
 * @description holds Admin queries
 */

export const AdminQuery = {
    admins: {
        resolve: async()=>{
            return await getAllAdmins();
        },
    },
    admin: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any,args : admin, _context: any, _info: any) => {
            return await getAdmin(args.id);
        },
    }
};