import { getDispatchOfficer, getAllDispatchOfficers } from '../controllers/DispatchOfficerController';
import { dispatchOfficer } from '../types';

/**
 * @description holds Dispatch Officer queries
 */

export const DispatchOfficerQuery = {
    dispatchOfficers: {
        resolve: async () => {
            return await getAllDispatchOfficers();
        },
    },
    dispatchOfficer: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: dispatchOfficer, _context: any, _info: any) => {
            return await getDispatchOfficer(args.id);
        },
    },
    me: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: (_parent: any, _args: any, context: any, _info: any) => {
            //console.log(context);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return context.currentDispatchOfficer;
        }
    }
};