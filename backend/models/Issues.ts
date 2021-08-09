import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import { NewIssueEntry } from '../types';

const issuesSchema = new Schema({

    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    filedBy: {
        type: Schema.Types.ObjectId,
        ref: 'DispatchOfficers',
        required: true
    },
    isSolved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

issuesSchema.plugin(uniqueValidator);

const Issue = mongoose.model<NewIssueEntry>('Issue', issuesSchema);

export default Issue;