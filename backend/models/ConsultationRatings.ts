import mongoose, { Schema } from "mongoose";
import { NewConsultationRatingEntry } from "../types";
import uniqueValidator from 'mongoose-unique-validator';

const consultationRatingSchema = new Schema({

    consultationID: {
        type: Schema.Types.ObjectId,
        ref: 'Consultation',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

consultationRatingSchema.plugin(uniqueValidator);

const ConsultationRating = mongoose.model<NewConsultationRatingEntry>('ConsultationRatings', consultationRatingSchema);

export default ConsultationRating;
