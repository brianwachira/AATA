import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import {NewPatientEntry} from '../types';

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
        unique: true
    },
    phoneNo: {
        type: String,
        required: false,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    guardians: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Guardian'
        }
    ],
    nextOfKin:[
        {
            type: Schema.Types.ObjectId,
            ref: 'NextOfKin'
        }
    ]
},{timestamps: true});

patientSchema.plugin(uniqueValidator);

const Patient = mongoose.model<NewPatientEntry>('Patient', patientSchema);
export default Patient;