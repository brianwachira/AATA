import { getAllStaff, getStaff } from "../controllers/StaffController";
import { staff } from "../types";

/**
 * @description holds staff queries
 */

export const StaffQuery = {
    staff : {
        resolve: async() => {
            return await getAllStaff();
        },
    },
    staffMember : {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent:any,args:staff, _context: any, _info: any) => {
            return await getStaff(args.id);
        },
    }
};