import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewClinicEntry } from '../types';

const clinicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    staff:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Staff'
        }
    ]  
},{timestamps: true});

clinicSchema.plugin(uniqueValidator);

// clinicSchema.methods.transform =  function(){
//     const obj = this.toObject();
//     const id : never = obj._id;
//     delete obj._id;
//     obj.id = id;
    
//     return obj;
// };

const Clinic = mongoose.model<NewClinicEntry>('Clinics', clinicSchema);

module.exports = Clinic;
