import { createPatient, updatePatient } from "../controllers/PatientController";
import { NewPatientEntry, patient } from "../types";

/**
 * @description holds patient mutation
 */

export const PatientMutation = {
    createPatient: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewPatientEntry, _context: any, _info: any) => {
            return await createPatient(args);
        }
    },
    updatePatient: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: patient, _context: any, _info: any) => {
            return await updatePatient(args);
        }
    }
};