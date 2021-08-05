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
exports.getClinic = exports.getAllClinics = exports.updateClinic = exports.createClinic = void 0;
const apollo_server_1 = require("apollo-server");
const Admins_1 = __importDefault(require("../models/Admins"));
const Clinics_1 = __importDefault(require("../models/Clinics"));
/**
 * @description holds crud operations for the clinic entity
 */
/**
 * creates clinic
 * @param args {NewClinic} clinic
 * @returns {clinic} created clinic
 */
const createClinic = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const existingadmin = yield Admins_1.default.findById(args.createdBy);
    if (!existingadmin) {
        throw new apollo_server_1.UserInputError("Clinic not available", { invalidArgs: args });
    }
    let clinic = new Clinics_1.default(args);
    try {
        clinic = yield clinic.save();
        existingadmin.clinicsLaunched = existingadmin.clinicsLaunched.concat(clinic._id);
        yield existingadmin.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return clinic;
});
exports.createClinic = createClinic;
/**
 * updates clinic
 * @param args clinic
 * @returns {clinic} updated clinic
 */
const updateClinic = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let clinic = yield Clinics_1.default.findOne({ name: args.name });
    if (!clinic) {
        throw new apollo_server_1.UserInputError("Clinic not available", { invalidArgs: args });
    }
    clinic = args;
    try {
        yield clinic.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return clinic;
});
exports.updateClinic = updateClinic;
/**
 * get all clinics
 * @returns {clinic[]} list all of clinics
 */
const getAllClinics = () => __awaiter(void 0, void 0, void 0, function* () {
    const clinic = yield Clinics_1.default.find({}).populate('createdBy');
    return clinic;
});
exports.getAllClinics = getAllClinics;
/**
 * gets clinic by id
 * @param args id
 * @returns {clinic} clinic
 */
const getClinic = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const clinic = yield Clinics_1.default.findById(args);
    if (!clinic) {
        throw new apollo_server_1.UserInputError("Clinic is not available", { invalidArgs: args.id });
    }
    return clinic;
});
exports.getClinic = getClinic;
