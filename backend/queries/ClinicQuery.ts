import { getAllClinics, getClinic } from "../controllers/ClinicController";
import { clinic } from "../types";

/**
 * @description holds clinic queries
 */
export const ClinicQuery = {
    clinics: {
        resolve: async() => {
            return getAllClinics();
        },
    },
    clinic: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent:any,args:clinic, _context: any, _info: any) => {
            return await getClinic(args.id);
        },
    }
};