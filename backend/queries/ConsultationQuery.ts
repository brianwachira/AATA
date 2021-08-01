import { getAllConsultations, getConsultation } from "../controllers/ConsultationController";
import { consultation } from "../types";

/**
 * @description holds consultation query
 */

export const ConsultationQuery = {
    consultations: {
        resolve: async() => {
            return await getAllConsultations();
        },
    },
    consultation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: consultation, _context: any, _info: any) => {
            return await getConsultation(args.id);
        },
    }
};