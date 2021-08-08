import { UserInputError } from "apollo-server";
import Guardian from "../models/Guardians";
import { guardian, NewGuardianEntry } from "../types";

/**
 * @description holds crud operations for guardian entity 
 */

/**
 * creates Guardian
 * @param args {NewGuardianEntry} guardian
 * @returns {guardian} created guardian
 */

export const createGuardian = async (args: NewGuardianEntry): Promise<guardian> => {


    let guardian = new Guardian(args);
    try {
        guardian = await guardian.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return guardian;
};

/**
 * updates guardian
 * @param args guardian
 * @returns {guardian} updated guardian
 */

export const updateGuardian = async (args: guardian): Promise<guardian> => {
    let guardian = await Guardian.findById(args._id);

    if (!guardian) {
        throw new UserInputError("Guardian not available", { invalidArgs: args });
    }

    guardian = args;

    try {
        await guardian.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return guardian;
};

/**
 * get all guardians
 * @returns {guardian[]} list all of guardians
 */

export const getAllGuardians = async (): Promise<guardian[]> => {
    const guardian: guardian[] = await Guardian.find();

    return guardian;
};

/**
 * gets guardian by id
 * @param args id
 * @returns {guardian} guardian
 */

export const getGuardian = async (args: { id: string; }): Promise<guardian> => {
    const guardian = await Guardian.findById(args);

    if (!guardian) {
        throw new UserInputError("Guardian is not available", { invalidArgs: args.id });
    }

    return guardian;
};
