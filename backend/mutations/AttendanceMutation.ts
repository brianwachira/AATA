import { createAttendanceEntry, updateAttendance } from "../controllers/AttendanceController";
import { attendance } from "../types";

/**
 * @description holds attendance mutation
 */

export const AttendanceMutation = {
    createAttendance: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: attendance, _context: any, _info: any) => {
            return await createAttendanceEntry(args);
        }
    },
    updateAttendance: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: attendance,_context: any, _info: any) => {
            return await updateAttendance(args);
        }
    }
};