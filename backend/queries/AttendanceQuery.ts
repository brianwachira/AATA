import { getAllAttendance, getAttendance } from "../controllers/AttendanceController";
import { attendance } from "../types";

/**
 * @description holds attendance query
 */

export const AttendanceQuery = {
    allAttendance: {
        resolve: async() => {
            return await getAllAttendance();
        },
    },
    attendance: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: async(_parent: any, args: attendance, _context: any, _info: any) => {
            return await getAttendance(args.id);
        },
    }
};