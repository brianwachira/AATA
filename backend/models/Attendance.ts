import mongoose, { Schema } from "mongoose";
import { attendance } from "../types";

const attendanceSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    isClockedOut: {
        type: Boolean,
        required: true,
        default: false
    }

}, { timestamps: true});

const Attendance = mongoose.model<attendance>('Attendance', attendanceSchema);
export default Attendance;