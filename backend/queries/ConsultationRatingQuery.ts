import { getAllConsultationRatings, getConsultationRating } from "../controllers/ConsultationRatingController";
import { consultationRating } from "../types";

/**
 * @description holds consultationrating query
 */

export const ConsultationRatingQuery = {
    consultationRatings: {
        resolve: async() => {
            return await getAllConsultationRatings();
        },
    },
    consultationRating: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: consultationRating, _context: any, _info: any) => {
            return await getConsultationRating(args.id);
        }
    }
};