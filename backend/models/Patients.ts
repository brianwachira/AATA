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
        required: false
    },
    phoneNo: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    guardians: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Guardians'
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

const Patients = mongoose.model<NewPatientEntry>('Patients', patientSchema);
export default Patients;