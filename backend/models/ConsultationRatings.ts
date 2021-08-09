import mongoose, { Schema } from "mongoose";
import { NewConsultationRatingEntry } from "../types";

const consultationRatingSchema = new Schema({

    consultation: {
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


const ConsultationRating = mongoose.model<NewConsultationRatingEntry>('ConsultationRatings', consultationRatingSchema);

export default ConsultationRating;
