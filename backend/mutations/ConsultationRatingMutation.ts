import { createConsultationRating, updateConsultationRating } from "../controllers/ConsultationRatingController";
import { consultationRating, NewConsultationRatingEntry } from "../types";

/**
 * @description holds consultation rating mutation
 */

export const ConsultationRatingMutation = {
    createConsultationRating: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: NewConsultationRatingEntry, _context: any, _info: any) => {
            return await createConsultationRating(args);
        }
    },
    updateConsultationRating: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async (_parent: any, args: consultationRating, _context: any, _info: any) => {
            return await updateConsultationRating(args);
        }
    }
};