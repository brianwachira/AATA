import { UserInputError } from "apollo-server";
import ConsultationRating from "../models/ConsultationRatings";
import Consultation from "../models/Consultations";
import { consultation, consultationRating, NewConsultationRatingEntry } from "../types";

/**
 * @description holds crud operations for consultation rating 
 */

/**
 * creates ConsultationRating
 * @param args {NewConsultationRatingEntry} Consultation Rating
 * @returns {consultationRating} created Consultation Rating
 */

export const createConsultationRating = async (args: NewConsultationRatingEntry): Promise<consultationRating> => {
    const consultationExists: consultation = await Consultation.findById(args.consultation) as consultation;
    if (!consultationExists) {
        throw new UserInputError("Consultation not available", { invalidArgs: args });
    }
    let newConsultationRating = new ConsultationRating(args);
    try {
        newConsultationRating = await newConsultationRating.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newConsultationRating;
};

/**
 * updates Consultation Rating
 * @param args Consultation Rating
 * @returns {consultationRating} updated Consultation Rating
 */

export const updateConsultationRating = async (args: consultationRating): Promise<consultationRating> => {

    let consultationRating = await ConsultationRating.findById(args._id);
    if (!consultationRating) {
        throw new UserInputError("Guardian not available", { invalidArgs: args });
    }
    consultationRating = args;
    try {
        await consultationRating.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return consultationRating;
};

/**
 * get all Consultation Ratings
 * @returns {consultationRating[]} list all of Consultation Ratings
 */

export const getAllConsultationRatings = async (): Promise<consultationRating[]> => {
    const consultationRatings: consultationRating[] = await ConsultationRating.find({}).populate('Consultation');
    return consultationRatings;
};

/**
 * gets Consultation Rating by id
 * @param args id
 * @returns {consultationRating} Consultation Rating
 */

export const getConsultationRating = async (args: { id: string; }): Promise<consultationRating> => {
    const consultationRating = await ConsultationRating.findById(args).populate('Consultation');

    if (!consultationRating) {
        throw new UserInputError("Consultation Ratings is not available", { invalidArgs: args.id });
    }
    return consultationRating;
};