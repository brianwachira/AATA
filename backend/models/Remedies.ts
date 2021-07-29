import mongoose, { Schema } from "mongoose";
import { NewRemediesEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const RemediesSchema = new Schema({

    title: {
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

const Remedies = mongoose.model<NewRemediesEntry>('Remedies', RemediesSchema);

export default Remedies;
