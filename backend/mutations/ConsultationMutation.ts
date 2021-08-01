import { createConsultation, updateConsultation } from "../controllers/ConsultationController";
import { consultation, NewConsultationEntry } from "../types";

export const ConsultationMutation = {
    createConsultation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: NewConsultationEntry, _contect: any, _info: any) => {
            return await createConsultation(args);
        }
    },
    updateConsultation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: consultation, _context: any, _info: any) => {
            return await updateConsultation(args);
        }
    }
};