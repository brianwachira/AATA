import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewIssueEntry } from '../types';

const issuesSchema = new Schema({

    branchID : {
        type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    filedBy : {
        type: Schema.Types.ObjectId,
        ref: 'DispatchOfficer',
        required: true
    }
}, { timestamps: true });

issuesSchema.plugin(uniqueValidator);

const Issues = mongoose.model<NewIssueEntry>('Issues', issuesSchema);

export default Issues;