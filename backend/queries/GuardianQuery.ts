import { getAllGuardians, getGuardian } from "../controllers/GuardianController";
import { guardian } from "../types";

/**
 * @description holds guardian query
 */

export const GuardianQuery = {
    guardians: {
        resolve: async() => {
            return await getAllGuardians();
        },
    },
    guardian: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent:any,args:guardian, _context: any, _info: any) => {
            return await getGuardian(args.id);
        },

    }
};