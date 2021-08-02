import { getAllDiagnosis, getDiagnosis } from "../controllers/DIagnosisController";
import { diagnosis } from "../types";
/**
 * @description holds Diagnosis queries
 */
export const DiagnosisQuery = {
    allDiagnosis: {
        resolve: async() => {
            return await getAllDiagnosis();
        },
    },
    diagnosis: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: diagnosis, _context:any, _info: any) => {
            return await getDiagnosis(args.id);
        },
    }

};