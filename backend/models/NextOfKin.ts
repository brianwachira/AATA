import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewNextOfKinEntry } from '../types';

const nextOfKinSchema = new Schema({
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
    }
}, { timestamps: true });

nextOfKinSchema.plugin(uniqueValidator);

const NextOfKin = mongoose.model<NewNextOfKinEntry>('NextOfKin', nextOfKinSchema);
export default NextOfKin;