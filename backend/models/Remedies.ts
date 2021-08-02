import mongoose, { Schema } from "mongoose";
import { NewRemediesEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const RemediesSchema = new Schema({
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
    diagnosis: {
        type : Schema.Types.ObjectId,
        ref: 'Diagnosis',
    }
},{timestamps: true});

RemediesSchema.plugin(uniqueValidator);

const Remedy = mongoose.model<NewRemediesEntry>('Remedies', RemediesSchema);

export default Remedy;
