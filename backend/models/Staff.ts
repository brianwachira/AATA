import mongoose, { Schema } from "mongoose";
import { NewStaffEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const staffSchema = new Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    DOB:{
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationalID:{
        type: String,
        required: true
    },
    phoneNo:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    staffType:{
        type: String,
        required: true,
    },
    branch:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Clinics'
        }
    ],
    consultations:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Consultations'
        }
    ],
    nextOfKin:[
        {
            type: Schema.Types.ObjectId,
            ref: 'NextOfKin'
        }
    ]
}, {timestamps: true});

staffSchema.plugin(uniqueValidator);

const Staff = mongoose.model<NewStaffEntry>('Staff',staffSchema);
export default Staff;