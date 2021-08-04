import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewClinicEntry } from '../types';

const clinicSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },  
},{timestamps: true});

clinicSchema.plugin(uniqueValidator);

const Clinic = mongoose.model<NewClinicEntry>('Clinic', clinicSchema);

export default Clinic;
