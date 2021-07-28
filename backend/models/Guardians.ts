import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import {NewGuardianEntry} from '../types';

const guardianSchema = new Schema({
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
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Patients'
        }
    ]
},{timestamps: true});

guardianSchema.plugin(uniqueValidator);

const Guardians = mongoose.model<NewGuardianEntry>('Guardians', guardianSchema);
export default Guardians;