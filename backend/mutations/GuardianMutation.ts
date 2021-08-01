import { createGuardian, updateGuardian } from "../controllers/GuardianController";
import { guardian, NewGuardianEntry } from "../types";

/**
 * @description holds guardian mutation
 */

export const GuardianMutation = {
    createGuardian: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewGuardianEntry, _context: any, _info: any) => {
            return await createGuardian(args);
        }
    },
    updateGuardian: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: guardian, _context: any, _info: any) => {
            return await updateGuardian(args);
        }
    }
};
