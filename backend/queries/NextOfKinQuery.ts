import { getAllNextOfKins, getNextOfKin } from "../controllers/NextOfKinController";
import { nextofkin } from "../types";

/**
 * @description holds nextofkin queries
 */

export const NextOfKinQuery = {
    nextofkins: {
        resolve: async() => {
            return await getAllNextOfKins();
        },
    },
    nextofkin: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent:any,args:nextofkin, _context: any, _info: any) => {
            return await getNextOfKin(args.id);
        },
    }
};