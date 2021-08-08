import { UserInputError } from "apollo-server";
import Admin from "../models/Admins";
import { admin, NewAdminEntry } from "../types";
import bcrypt from 'bcrypt';
import { parseString } from "../typeGuards";
/**
 * 
 * @description holds crud operations for the admin entity 
 */


/**
 * creates admin
 * @param args {NewAdminEntry} admin
 * @returns {admin} created Admin
 */
 
export const createAdmin = async (args: NewAdminEntry): Promise<admin> => {
    const saltRounds  = 10;
    
    /**
     * hash password using bycrypt
     * use typeguards to ensure return value is a string
     **/

    //eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const passwordHash : string= parseString(await bcrypt.hash(args.password, saltRounds));
    let admin = new Admin({...args,password: passwordHash});
    try {
        admin = await admin.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }

    return admin;
};

/**
 * updates admin
 * @param args admin
 * @returns {admin} updated Admin
 */

export const updateAdmin = async (args: admin): Promise<admin> => {
    const admin = await Admin.findOne({ email: args.email });

    if (!admin) {
        throw new UserInputError("Admin is not available", { invalidArgs: args });
    }
    admin.clinicsLaunched = args.clinicsLaunched;

    try {
        await admin.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return admin;
};


/**
 * gets all admins
 * @returns {admin[]} list of all admins
 */

export const getAllAdmins = async (): Promise<admin[]> => {
    const admins : admin[]= await Admin.find({}).populate('clinicsLaunched');

    return admins;
};

/**
 * gets admin
 * @param args id
 * @returns {admin} admin
 */

export const getAdmin = async(args: { id: string; }): Promise<admin> => {

    const admin = await Admin.findById(args).populate('clinicsLaunched');

    if (!admin) {
        throw new UserInputError("Admin is not available", { invalidArgs: args.id });
    }

    return admin;
};

