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
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        index: {
            unique: true,
            partialFilterExpression: { email: { $type: "string" } }
        }
    },
    relationship: {
        type: String,
        required: true
    },
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ]
},{timestamps: true});

guardianSchema.plugin(uniqueValidator);

const Guardian = mongoose.model<NewGuardianEntry>('Guardians', guardianSchema);
export default Guardian;