"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaff = exports.getAllStaff = exports.updateStaff = exports.createStaff = void 0;
const apollo_server_1 = require("apollo-server");
const Staff_1 = __importDefault(require("../models/Staff"));
/**
 * @description holds crud operations for the staff entity
 */
/**
 * creates staff
 * @param args {NewStaff} staff
 * @returns {staff} created staff member
 */
const createStaff = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = new Staff_1.default(args);
    try {
        yield staff.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return staff;
});
exports.createStaff = createStaff;
/**
 * updates staff member
 * @param args staff member
 * @returns {staff} updated staff member
 */
const updateStaff = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let staff = yield Staff_1.default.findOne({ email: args.email });
    if (!staff) {
        throw new apollo_server_1.UserInputError("Staff not available", { invalidArgs: args });
    }
    staff = args;
    try {
        yield staff.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return staff;
});
exports.updateStaff = updateStaff;
/**
 * get all staff members
 * @returns {staff[]} list all of staff members
 */
const getAllStaff = () => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield Staff_1.default.find();
    return staff;
});
exports.getAllStaff = getAllStaff;
/**
 * gets staff member by id
 * @param args id
 * @returns {staff} staff
 */
const getStaff = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield Staff_1.default.findById(args);
    if (!staff) {
        throw new apollo_server_1.UserInputError("Staff is not available", { invalidArgs: args.id });
    }
    return staff;
});
exports.getStaff = getStaff;
