import { createPayment, updatePayment } from "../controllers/PaymentController";
import { payment } from "../types";

/**
 * @description holds payment mutation
 */

export const PaymentMutation = {
    createPayment: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: payment, _context: any, _info: any)=> {
            return await createPayment(args);
        }
    },
    updatePayment: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: payment, _context: any, _info: any)=> {
            return await updatePayment(args);
        }
    }
};