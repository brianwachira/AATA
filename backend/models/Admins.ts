import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewAdminEntry } from '../types';
const adminSchema = new Schema({
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
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    clinicsLaunched: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Clinics'
        }
    ]
},{timestamps: true});

adminSchema.plugin(uniqueValidator);


const Admins = mongoose.model<NewAdminEntry>('Admins', adminSchema);
export default Admins;
