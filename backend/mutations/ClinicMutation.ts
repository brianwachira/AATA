import { createClinic, updateClinic } from "../controllers/ClinicController";
import { NewClinicEntry } from "../types";

/**
 * @description holds clinic mutations
 */

export const ClinicMutation = {
    createClinic: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewClinicEntry,_context: any, _info: any) => {
            return await createClinic(args);
        } 
    },
    updateClinic: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve : async(_parent: any, args: NewClinicEntry, _context: any,_info:any) => {
            return await updateClinic(args);
        }
    }
};