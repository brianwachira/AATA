import mongoose, { Schema } from "mongoose";
import { payment } from "../types";

const paymentsSchema = new Schema({
    consultation: {
        type: Schema.Types.ObjectId,
        ref: 'Consultation',
        required: true
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }

}, { timestamps: true });

const Payment = mongoose.model<payment>('Payment', paymentsSchema);
export default Payment;