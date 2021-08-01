import { UserInputError } from "apollo-server";
import Clinic from "../models/Clinics";
import Consultation from "../models/Consultations";
import Patient from "../models/Patients";
import Staff from "../models/Staff";
import { parseString } from "../typeGuards";
import { consultation, NewConsultationEntry, patient, staff } from "../types";

/**
 * @description holds crud operations for consultation entity 
 */

/**
 * creates Consultation
 * @param args {NewConsultationEntry} Consultation
 * @returns {consultation} created Consultation
 */

export const createConsultation = async (args: NewConsultationEntry): Promise<consultation> => {

    const patientExists: patient = await Patient.findById(args.patient) as patient;
    if (!patientExists) {
        throw new UserInputError("Patient not available", { invalidArgs: args });
    }

    const stafftoload = args.staff as unknown as Array<string>;

    const staffexists = stafftoload.map(async (id: string): Promise<staff> => {
        const staffFound = await Staff.findById(id);
        if (!staffFound) {
            throw new UserInputError("Staff not available", { invalidArgs: id });
        }
        return staffFound;
    });

    const clinicExists = await Clinic.findById(args.branch);
    if (!clinicExists) {
        throw new UserInputError("Clinic not available", { invalidArgs: args });
    }

    let newConsultation = new Consultation(args);

    try {
        const savedNewConsultation = await newConsultation.save();
        newConsultation = savedNewConsultation;

        patientExists.consultations = patientExists.consultations.concat(parseString(savedNewConsultation._id));
        await patientExists.save();

        const write = () => {
            staffexists.map(async (staffmember: Promise<staff>) => {
                (await staffmember).consultations = (await staffmember).consultations.concat(parseString(savedNewConsultation._id));
                await (await staffmember).save();
            });
        };
        write();

    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newConsultation;
};

/**
 * updates Consultation
 * @param args Consultation
 * @returns {consultation} updated Consultation
 */

export const updateConsultation = async (args: consultation): Promise<consultation> => {
    const consultation = await Consultation.findById(args._id);

    if (!consultation) {
        throw new UserInputError("Guardian not available", { invalidArgs: args });
    }
    try {
        await consultation.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return consultation;
};

/**
 * get all Consultations
 * @returns {consultation[]} list all of Consultations
 */

export const getAllConsultations = async (): Promise<consultation[]> => {
    const consultations: consultation[] = await Consultation.find({}).populate('patients staff branch diagnosis');

    return consultations;
};

/**
 * gets Consultation by id
 * @param args id
 * @returns {consultation} Consultation
 */

export const getConsultation = async (args: { id: string; }): Promise<consultation> => {
    const consultation = await Consultation.findById(args).populate('patients staff branch diagnosis');

    if (!consultation) {
        throw new UserInputError("Staff is not available", { invalidArgs: args.id });
    }
    return consultation;
};