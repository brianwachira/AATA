import { UserInputError } from "apollo-server";
import NextOfKin from "../models/NextOfKin";
import { nextofkin, NewNextOfKinEntry } from "../types";

/**
 * @description holds crud operations for nextofkin entity 
 */


/**
 * creates NextOfKin
 * @param args {NewNextOfKinEntry} NextOfKin
 * @returns {nextofkin} created NextOfKin
 */

export const createNextOfKin = async (args: NewNextOfKinEntry): Promise<nextofkin> => {

    let nextofkin = new NextOfKin(args);
    try {
        nextofkin = await nextofkin.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return nextofkin;
};

/**
 * updates NextOfKin
 * @param args NextOfKin
 * @returns {nextOfKin} updated NextOfKin
 */

export const updateNextofKin = async (args: nextofkin): Promise<nextofkin> => {
    let nextofkin = await NextOfKin.findById(args._id);

    if (!nextofkin) {
        throw new UserInputError("The next of kin is not available", { invalidArgs: args });
    }

    nextofkin = args;

    try {
        await nextofkin.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return nextofkin;
};

/**
 * get all NextOfKins
 * @returns {nextOfKin[]} list all of NextOfKins
 */

export const getAllNextOfKins = async (): Promise<nextofkin[]> => {
    const nextofkin: nextofkin[] = await NextOfKin.find();

    return nextofkin;
};

/**
 * gets NextOfKin by id
 * @param args id
 * @returns {nextOfKin} NextOfKin
 */

export const getNextOfKin = async (args: { id: string; }): Promise<nextofkin> => {
    const nextofkin = await NextOfKin.findById(args);

    if (!nextofkin) {
        throw new UserInputError("Nextofkin is not available", { invalidArgs: args.id });
    }

    return nextofkin;
};