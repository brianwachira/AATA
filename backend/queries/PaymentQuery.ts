import { getPayment, getPayments } from "../controllers/PaymentController";
import { payment } from "../types";

export const PaymentQuery = {
    payments: {
        resolve: async() => {
            return await getPayments();
        }
    },
    payment: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: payment, _context: any, _info: any) => {
            return await getPayment(args.id);
        },
    }
};