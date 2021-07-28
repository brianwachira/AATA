import mongoose, { Schema } from "mongoose";
import { NewConsultationEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const consultationSchema = new Schema({
    patientID: {
        type: Schema.Types.ObjectId,
        ref: 'patients',
        required: true
    },
    staffID: [{
        type: Schema.Types.ObjectId,
        ref: 'staff',
        required: true
    }],
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'clinics',
        required: true
    },
    diagnosis: [{
        type: Schema.Types.ObjectId,
        ref: 'diagnosis',
        required: true
    }]

}, { timestamps: true });

consultationSchema.plugin(uniqueValidator);

const Consultations = mongoose.model<NewConsultationEntry>('Consultations', consultationSchema);

export default Consultations;