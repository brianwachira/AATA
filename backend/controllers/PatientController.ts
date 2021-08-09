import { UserInputError } from "apollo-server";
import Patient from "../models/Patients";
import { NewPatientEntry, patient } from "../types";

/**
 * @description holds crud operations for patient entity 
 */

/**
 * creates Patient
 * @param args {NewPatientEntry} patient
 * @returns {patient} created patient
 */

export const createPatient = async (args: NewPatientEntry): Promise<patient> => {
    let patient = new Patient(args);
    try {
        patient = await patient.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return patient;
};

/**
 * updates patient
 * @param args patient
 * @returns {patient} updated patient
 */

export const updatePatient = async (args: patient): Promise<patient> => {
    let patient = await Patient.findById(args._id);

    if (!patient) {
        throw new UserInputError("Patient not available", { invalidArgs: args });
    }

    patient = args;

    try {
        await patient.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return patient;
};

/**
 * get all patients
 * @returns {patient[]} list all of patients
 */

export const getAllPatients = async (): Promise<patient[]> => {
    const patient: patient[] = await Patient.find().populate('clinic');

    return patient;
};

/**
 * gets patient by id
 * @param args id
 * @returns {patient} patient
 */

export const getPatient = async (args: { id: string; }): Promise<patient> => {
    const patient = await Patient.findById(args).populate('clinic');

    if (!patient) {
        throw new UserInputError("Patient is not available", { invalidArgs: args.id });
    }

    return patient;
};