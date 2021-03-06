import { UserInputError } from "apollo-server";
import Admin from "../models/Admins";
import Clinic from "../models/Clinics";
import { clinic, NewClinicEntry } from "../types";

/**
 * @description holds crud operations for the clinic entity 
 */

/**
 * creates clinic
 * @param args {NewClinic} clinic
 * @returns {clinic} created clinic
 */

export const createClinic = async (args: NewClinicEntry): Promise<clinic> => {
    const existingadmin  = await Admin.findById(args.createdBy);

    if (!existingadmin) {
        throw new UserInputError("Clinic not available", { invalidArgs: args });
    }

    let clinic = new Clinic(args);
    try {
        clinic = await clinic.save();
        
        existingadmin.clinicsLaunched = existingadmin.clinicsLaunched.concat(clinic._id);

        await existingadmin.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return clinic;
};

/**
 * updates clinic
 * @param args clinic
 * @returns {clinic} updated clinic
 */

export const updateClinic = async (args: clinic): Promise<clinic> => {
    let clinic = await Clinic.findOne({ name: args.name }).populate('createdBy');
    if (!clinic) {
        throw new UserInputError("Clinic not available", { invalidArgs: args });
    }
    clinic = args;
    try {
        await clinic.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return clinic;
};

/**
 * get all clinics
 * @returns {clinic[]} list all of clinics
 */

export const getAllClinics = async (): Promise<clinic[]> => {
    const clinic: clinic[] = await Clinic.find({}).populate('createdBy');
    return clinic;
};

/**
 * gets clinic by id
 * @param args id
 * @returns {clinic} clinic
 */

export const getClinic = async (args: { id: string; }): Promise<clinic> => {
    const clinic = await Clinic.findById(args).populate('createdBy');

    if (!clinic) {
        throw new UserInputError("Clinic is not available", { invalidArgs: args.id });
    }

    return clinic;
};

