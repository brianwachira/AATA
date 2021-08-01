import { UserInputError } from "apollo-server";
import Staff from "../models/Staff";
import { NewStaffEntry, staff } from "../types";

/**
 * @description holds crud operations for the staff entity 
 */

/**
 * creates staff
 * @param args {NewStaff} staff
 * @returns {staff} created staff member
 */

export const createStaff = async (args: NewStaffEntry): Promise<staff> => {

    const staff = new Staff(args);
    try {
        await staff.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });

    }
    return staff;
};

/**
 * updates staff member
 * @param args staff member
 * @returns {staff} updated staff member
 */

export const updateStaff = async (args: staff): Promise<staff> => {
    let staff = await Staff.findOne({ email: args.email });

    if (!staff) {
        throw new UserInputError("Staff not available", { invalidArgs: args });
    }
    staff = args;

    try {
        await staff.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }

    return staff;
};

/**
 * get all staff members
 * @returns {staff[]} list all of staff members
 */

export const getAllStaff = async(): Promise<staff[]> => {
    const staff : staff[] = await Staff.find();

    return staff;
};

/**
 * gets staff member by id
 * @param args id
 * @returns {staff} staff
 */

 export const getStaff = async (args: { id: string; }): Promise<staff> => {
    const staff = await Staff.findById(args);

    if (!staff) {
        throw new UserInputError("Staff is not available", { invalidArgs: args.id });
    }

    return staff;
};