import { createAdmin, updateAdmin } from "../controllers/AdminController";
import { admin, NewAdminEntry } from "../types";

/**
 * @description holds admin mutations
 */

export const AdminMutation = {
    createAdmin: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any,args : NewAdminEntry, _context: any, _info: any) => {
            return await createAdmin(args);
        }
    },
    updateAdmin: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any,args : admin, _context: any, _info: any) => {
            return await updateAdmin(args);
        }
    }
};