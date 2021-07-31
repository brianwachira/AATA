import mongoose, { Schema } from "mongoose";
import { NewDiagnosisEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const DiagnosisSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    remedy: [
        {
            type:Schema.Types.ObjectId,
            ref: 'remedies',      
        }
    ]

},{timestamps: true});

DiagnosisSchema.plugin(uniqueValidator);
const Diagnosis = mongoose.model<NewDiagnosisEntry>('Diagnosis', DiagnosisSchema);

export default Diagnosis;