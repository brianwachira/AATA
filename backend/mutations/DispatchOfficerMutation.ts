import { createDispatchOfficer, updateDispatchOfficer } from "../controllers/DispatchOfficerController";
import { NewDispatchOfficerEntry } from "../types";

/**
 * @description holds dispatch officer mutations
 */

export const DispatchOfficerMutation = {
    createDispatchOfficer: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: NewDispatchOfficerEntry, _context: any, _info: any) => {
            return await createDispatchOfficer(args);
        }
    },
    updateDispatchOfficer: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: NewDispatchOfficerEntry, _context: any, _info: any) => {
            return await updateDispatchOfficer(args);
        }
    }
};