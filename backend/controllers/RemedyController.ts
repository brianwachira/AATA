import { UserInputError } from "apollo-server";
import Remedy from "../models/Remedies";
import { NewRemediesEntry, remedy } from "../types";

/**
 * @description holds crud operations for remedy entity 
 */

/**
 * creates Remedy
 * @param args {NewRemedyEntry} remedy
 * @returns {remedy} created remedy
 */

export const createRemedy = async (args: NewRemediesEntry): Promise<remedy> => {
    let newremedy = new Remedy(args);

    try {
        newremedy = await newremedy.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newremedy;
};

/**
 * updates Remedy
 * @param args remedy
 * @returns {remedy} updated remedy
 */

export const updateRemedy = async (args: remedy): Promise<remedy> => {
    let remedyToUpdate = await Remedy.findById(args._id);

    if (!remedyToUpdate) {
        throw new UserInputError("Remedy not available", { invalidArgs: args });
    }
    remedyToUpdate = args;

    try {
        await remedyToUpdate.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return remedyToUpdate;
};

/**
 * get all remediess
 * @returns {remedy[]} list all of remedies
 */

export const getAllRemedies = async (): Promise<remedy[]> => {
    const Allremedy: remedy[] = await Remedy.find();
    return Allremedy;
};

/**
 * gets remedy by id
 * @param args id
 * @returns {remedies} remedy
 */

export const getRemedy = async (args: { id: string; }): Promise<remedy> => {
    const singleRemedy = await Remedy.findById(args);
    if (!singleRemedy) {
        throw new UserInputError("Remedy is not available", { invalidArgs: args.id });
    }
    return singleRemedy;
};


