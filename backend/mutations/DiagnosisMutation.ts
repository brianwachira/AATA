import { createDiagnosis, updateDiagnosis } from "../controllers/DIagnosisController";
import { diagnosis, NewDiagnosisEntry } from "../types";

/**
 * @description holds diagnosis mutations
 */

export const DiagnosisMutation = {
    createDiagnosis: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewDiagnosisEntry, _context: any, _info: any) => {
            return await createDiagnosis(args);
        }
    },
    updateDiagnosis: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: diagnosis, _context: any, _info : any) => {
            return await updateDiagnosis(args);
        }
    }
};