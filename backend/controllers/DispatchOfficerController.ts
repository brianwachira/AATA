import { UserInputError } from "apollo-server";
import DispatchOfficer from "../models/DipatchOfficers";
import { dispatchOfficer, NewDispatchOfficerEntry } from "../types";
import bcrypt from 'bcrypt';
import { parseString } from "../typeGuards";
import jwt from 'jsonwebtoken';
//createDispatchOfficer, updateDispatchOfficer
//getDispatchOfficer, getAllDispatchOfficers

/**
 * @description holds crud operations for the dispatch officer entity 
 */

/**
 * creates dispatch officer
 * @param args {NewDispatchOfficer} dispatch officer
 * @returns {dispatchOfficer} created dispatch officer
 */

export const createDispatchOfficer = async (args: NewDispatchOfficerEntry): Promise<dispatchOfficer> => {
    const saltRounds = 10;

    /**
     * hash password using bycrypt
     * use typeguards to ensure return value is a string
     **/
    //eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const passwordHash: string = parseString(await bcrypt.hash(args.password, saltRounds));
    const dispatchOfficer = new DispatchOfficer({ ...args, password: passwordHash });
    try {
        await dispatchOfficer.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return dispatchOfficer;
};

/**
 * updates Dispatch Officer
 * @param args dispatch officer
 * @returns {dispatchOfficer} updated dispatch officer
 */

export const updateDispatchOfficer = async (args: dispatchOfficer): Promise<dispatchOfficer> => {
    let dispatchOfficer = await DispatchOfficer.findOne({ email: args.email });

    if (!dispatchOfficer) {
        throw new UserInputError("Dispatch Officer account not available", { invalidArgs: args });
    }
    dispatchOfficer = args;

    try {
        await dispatchOfficer.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }

    return dispatchOfficer;
};

/**
 * get all dispatch officers
 * @returns {dispatchOfficer[]} list all of dispatch officers
 */

export const getAllDispatchOfficers = async (): Promise<dispatchOfficer[]> => {
    const dispatchOfficers: dispatchOfficer[] = await DispatchOfficer.find();

    return dispatchOfficers;
};

/**
 * gets dispatch officer
 * @param args id
 * @returns {dispatchOfficer} dispatch officer
 */

export const getDispatchOfficer = async (args: { id: string; }): Promise<dispatchOfficer> => {
    const dispatchOfficer = await DispatchOfficer.findById(args);
    if (!dispatchOfficer) {
        throw new UserInputError("User is not available", { invalidArgs: args.id });
    }

    return dispatchOfficer;
};
interface jwtresponse {
    value: string
}
export const login = async (args: { email: string, password: string }): Promise<jwtresponse> => {
    const dispatchOfficer = await DispatchOfficer.findOne({ email: args.email });

    if (!dispatchOfficer) {
        throw new UserInputError("Account not available", { invalidArgs: args.email });
    }

    const passwordCorrect = dispatchOfficer === null
        ? false
        : await bcrypt.compare(args.password, dispatchOfficer.password);

    if (!(dispatchOfficer && passwordCorrect)) {
        throw new UserInputError("wrong credentials", { invalidArgs: args.email });
    }
    const dispatchOfficerForToken = {
        firstName: dispatchOfficer.firstName,
        lastName: dispatchOfficer.lastName,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id: dispatchOfficer._id
    };
    const JWT_SECRET = 'afyakilamahali';
    const token: string = jwt.sign(dispatchOfficerForToken, JWT_SECRET);
    return { value: token };

};