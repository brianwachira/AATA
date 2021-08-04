import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewPatientEntry } from '../types';

const patientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationalID: {
        type: String,
        required: false,
        index: {
            unique: true,
            partialFilterExpression: { nationalID: { $type: "string" } }
        }
    },
    phoneNo: {
        type: String,
        required: false,
        index: {
            unique: true,
            partialFilterExpression: { phoneNo: { $type: "string" } }
        }
    },
    email: {
        type: String,
        required: false,
        index: {
            unique: true,
            partialFilterExpression: { email: { $type: "string" } }
        }
    },
    branchOfRegistry:
    {
        type: Schema.Types.ObjectId,
        ref: 'Clinic'
    },
    guardians:
    {
        type: Schema.Types.ObjectId,
        ref: 'Guardian'
    },
    nextOfKin:
        {
            type: Schema.Types.ObjectId,
            ref: 'NextOfKin'
        }
    ,
    consultations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Consultation'
        }
    ],
}, { timestamps: true });

patientSchema.plugin(uniqueValidator);

const Patient = mongoose.model<NewPatientEntry>('Patient', patientSchema);
export default Patient;