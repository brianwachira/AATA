import mongoose, { Schema } from "mongoose";
import { NewConsultationEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const consultationSchema = new Schema({
    patientID: {
        type: Schema.Types.ObjectId,
        ref: 'Patients',
        required: true
    },
    staffID: [{
        type: Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    }],
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Clinics',
        required: true
    },
    diagnosis: [{
        type: Schema.Types.ObjectId,
        ref: 'Diagnosis',
        required: true
    }]

}, { timestamps: true });

consultationSchema.plugin(uniqueValidator);

const Consultations = mongoose.model<NewConsultationEntry>('Consultations', consultationSchema);

export default Consultations;