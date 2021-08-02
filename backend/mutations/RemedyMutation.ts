import { createRemedy, updateRemedy } from "../controllers/RemedyController";
import { NewRemediesEntry, remedy } from "../types";

/**
 * @description holds remedy mutation
 */


export const RemedyMutation = {
    createRemedy: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewRemediesEntry, _context: any, _info: any) => {
            return await createRemedy(args);
        }
    },
    updateRemedy: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args:remedy, _context: any, _info: any) => {
            return await updateRemedy(args);
        }
    }
};