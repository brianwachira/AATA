import mongoose, { Schema } from "mongoose";
import { NewConsultationEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const consultationSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    staff: [{
        type: Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    }],
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    diagnosis: [{
        type: Schema.Types.ObjectId,
        ref: 'Diagnosis',
        required: true
    }]

}, { timestamps: true });

consultationSchema.plugin(uniqueValidator);

const Consultation = mongoose.model<NewConsultationEntry>('Consultation', consultationSchema);

export default Consultation;