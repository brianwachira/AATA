import { createNextOfKin, updateNextofKin } from "../controllers/NextOfKinController";
import { NewNextOfKinEntry, nextofkin } from "../types";

/**
 * @description holds nextofkin mutation
 */

export const NextOfKinMutation = {
    createNextOfKin: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: NewNextOfKinEntry, _context: any, _info: any) => {
            return await createNextOfKin(args);
        }
    },
    updateNextOfKin: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: nextofkin, _context: any, _info: any) => {
            return await updateNextofKin(args);
        }
    }
};