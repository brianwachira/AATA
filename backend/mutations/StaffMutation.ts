import { createStaff, updateStaff } from "../controllers/StaffController";
import { NewStaffEntry } from "../types";

/**
 * @description holds staff mutations
 */

export const StaffMutation = {
    createStaff: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewStaffEntry, _context: any, _info: any) => {
            return await createStaff(args);
        }
    },
    updateStaff: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: NewStaffEntry, _context: any, _info: any) => {
            return await updateStaff(args);
        }
    }
};