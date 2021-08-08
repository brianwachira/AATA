import { UserInputError } from "apollo-server";
import Attendance from "../models/Attendance";
import Clinic from "../models/Clinics";
import Staff from "../models/Staff";
import { attendance, clinic, staff } from "../types";

/**
 * @description holds crud operations for attendance 
 */

/**
 * creates attendance
 * @param args {NewattendanceEntry} attendance
 * @returns {attendance} created attendance
 */

export const createAttendanceEntry = async (args: attendance): Promise<attendance> => {
    const staffExists: staff = await Staff.findById(args.staff) as staff;
    if (!staffExists) {
        throw new UserInputError("Staff not available");
    }
    const branchExists: clinic = await Clinic.findById(args.branch) as clinic;
    if (!branchExists) {
        throw new UserInputError("Clinic not available");
    }
    let newAttendance = new Attendance(args);
    try {
        newAttendance = await newAttendance.save();
    } catch (error) {
        throw new UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newAttendance;
};

/**
 * updates attendance
 * @param args attendance
 * @returns {attendance} updated attendance
 */

export const updateAttendance = async (args: attendance): Promise<attendance> => {

    let attendanceToUpdate = await Attendance.findById(args._id);
    if (!attendanceToUpdate) {
        throw new UserInputError("Attendance not available", { invalidArgs: args });
    }
    attendanceToUpdate = { ...attendanceToUpdate, isClockedOut: true } as attendance;

    try {
        await attendanceToUpdate.save();
    } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
    }
    return attendanceToUpdate;
};

/**
 * get all Attendances
 * @returns {attendance[]} list all of Attendances
 */

export const getAllAttendance = async (): Promise<attendance[]> => {
    const attendance: attendance[] = await Attendance.find({}).populate('staff clinic');
    return attendance;
};

/**
 * gets Attendance by id
 * @param args id
 * @returns {attendance} Attendance
 */

export const getAttendance = async (args: { id: string; }): Promise<attendance> => {
    const attendance = await Attendance.findById(args).populate('staff clinic');
    if (!attendance) {
        throw new UserInputError("Attendance record is not available", { invalidArgs: args.id });
    }
    return attendance;
};