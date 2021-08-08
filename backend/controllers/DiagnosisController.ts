import { UserInputError } from "apollo-server";
import Diagnosis from "../models/Diagnosis";
import { diagnosis, NewDiagnosisEntry } from "../types";

/**
 * @description holds crud operations for diagnosis entity 
 */

/**
 * creates Diagnosis
 * @param args {DiagnosisEntry} diagnosis
 * @returns {diagnosis} created diagnosis
 */

export const createDiagnosis = async (args: NewDiagnosisEntry): Promise<diagnosis> => {
    let newDiagnosis = new Diagnosis(args);
    try {
        newDiagnosis = await newDiagnosis.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args
        });
    }
    return newDiagnosis;
};

/**
 * updates diagnosis
 * @param args diagnosis
 * @returns {diagnosis} updated diagnosis
 */

export const updateDiagnosis = async (args: diagnosis): Promise<diagnosis> => {
    let diagnosisToUpdate = await Diagnosis.findById(args._id).populate('remedies');

    if (!diagnosisToUpdate) {
        throw new UserInputError("diagnosis is not available", { invalidArgs: args });
    }

    diagnosisToUpdate = args;

    try {
        await diagnosisToUpdate.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return diagnosisToUpdate;
};

/**
 * get all diagnosis
 * @returns {diagnosis[]} list all of diagnosis
 */

export const getAllDiagnosis = async (): Promise<diagnosis[]> => {
    const Alldiagnosis: diagnosis[] = await Diagnosis.find().populate('remedies');
    return Alldiagnosis;
};

/**
 * gets diagnosis by id
 * @param args id
 * @returns {diagnosis} diagnosis
 */

export const getDiagnosis = async (args: { id: string; }): Promise<diagnosis> => {
    const singleDiagnosis = await Diagnosis.findById(args).populate('remedies');
    if (!singleDiagnosis) {
        throw new UserInputError('Diagnosis is not available', { invalidArgs: args.id });
    }
    return singleDiagnosis;
};


