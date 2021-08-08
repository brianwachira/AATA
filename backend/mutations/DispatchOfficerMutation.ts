import { createDispatchOfficer, login, updateDispatchOfficer } from "../controllers/DispatchOfficerController";
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
    },
    login: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: {email : string, password : string}, _context: any, _info: any) => {
            return await login(args);
        }
    }
};