import { getAllRemedies, getRemedy } from "../controllers/RemedyController";
import { remedy } from "../types";

/**
 * @description holds remedy queries
 */

export const RemedyQuery = {
    remedies: {
        resolve: async() => {
            return await getAllRemedies();
        },
    },
    remedy: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: remedy, _context:any, _info: any) => {
            return await getRemedy(args.id);
        },
    }
};