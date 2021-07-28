import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewDispatchOfficerEntry,Unormal } from '../types';
const dispatchOfficerSchema = new Schema({
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
    Gender: {
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
        required: true
    },
    assessments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Assessment'
        }
    ]
},{timestamps: true});

dispatchOfficerSchema.plugin(uniqueValidator);

dispatchOfficerSchema.set('toJSON', {
    transform: ((returnedObject:Unormal) => {
        returnedObject.id = returnedObject?._id?.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    })
});

const DispatchOfficer = mongoose.model<NewDispatchOfficerEntry>('DispatchOfficer', dispatchOfficerSchema);
export default DispatchOfficer;
