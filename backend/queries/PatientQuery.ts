import { getAllPatients, getPatient } from "../controllers/PatientController";
import { patient } from "../types";

/**
 * @description holds patient queries
 */

export const PatientQuery = {
    patients: {
        resolve: async() => {
            return await getAllPatients();
        },
    },
    patient: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent:any,args:patient, _context: any, _info: any) => {
            return await getPatient(args.id);
        },
    }
};