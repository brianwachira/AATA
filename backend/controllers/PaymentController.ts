import { UserInputError } from "apollo-server";
import { payment, clinic, consultation } from "../types";
import Clinic from "../models/Clinics";
import Consultation from "../models/Consultations";
import Payment from "../models/Payments";

/**
 * @description holds crud operations for payment
 */

/**
 * creates Payment
 * @param args {payment} payment
 * @returns {payment} created payment
 */

export const createPayment = async (args: payment): Promise<payment> => {

    const consultationExists: consultation = await Consultation.findById(args.consultation) as consultation;
    if (!consultationExists) {
        throw new UserInputError("Consultation not available");
    }
    const branchExists: clinic = await Clinic.findById(args.branch) as clinic;
    if (!branchExists) {
        throw new UserInputError("Clinic not available");
    }
    let newPayment = new Payment(args);
    try {
        newPayment = await newPayment.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newPayment;
};

/**
 * updates payment
 * @param args payment
 * @returns {payment} updated payment
 */

export const updatePayment = async (args: payment): Promise<payment> => {
    let paymentToUpdate = await Payment.findById(args._id);
    if (!paymentToUpdate) {
        throw new UserInputError("Payment not available", { invalidArgs: args });
    }
    paymentToUpdate = { ...paymentToUpdate, description: args.description } as payment;

    try {
        await paymentToUpdate.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return paymentToUpdate;
};

/**
 * get all Payments
 * @returns {payment[]} list all of Payments
 */

export const getPayments = async (): Promise<payment[]> => {
    const payment: payment[] = await Payment.find({}).populate('consultation clinic');
    return payment;
};

/**
 * gets Payment by id
 * @param args id
 * @returns {payment} Payment
 */

export const getPayment = async (args: { id: string; }): Promise<payment> => {
    const payment = await Payment.findById(args).populate('consultation clinic');
    if (!payment) {
        throw new UserInputError("Payment record is not available", { invalidArgs: args.id });
    }
    return payment;
};
