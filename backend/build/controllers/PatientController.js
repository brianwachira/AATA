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
exports.getPatient = exports.getAllPatients = exports.updatePatient = exports.createPatient = void 0;
const apollo_server_1 = require("apollo-server");
const Patients_1 = __importDefault(require("../models/Patients"));
/**
 * @description holds crud operations for patient entity
 */
/**
 * creates Patient
 * @param args {NewPatientEntry} patient
 * @returns {patient} created patient
 */
const createPatient = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = new Patients_1.default(args);
    try {
        yield patient.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return patient;
});
exports.createPatient = createPatient;
/**
 * updates patient
 * @param args patient
 * @returns {patient} updated patient
 */
const updatePatient = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let patient = yield Patients_1.default.findById(args._id);
    if (!patient) {
        throw new apollo_server_1.UserInputError("Patient not available", { invalidArgs: args });
    }
    patient = args;
    try {
        yield patient.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return patient;
});
exports.updatePatient = updatePatient;
/**
 * get all patients
 * @returns {patient[]} list all of patients
 */
const getAllPatients = () => __awaiter(void 0, void 0, void 0, function* () {
    const patient = yield Patients_1.default.find().populate('clinic');
    return patient;
});
exports.getAllPatients = getAllPatients;
/**
 * gets patient by id
 * @param args id
 * @returns {patient} patient
 */
const getPatient = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const patient = yield Patients_1.default.findById(args).populate('clinic');
    if (!patient) {
        throw new apollo_server_1.UserInputError("Patient is not available", { invalidArgs: args.id });
    }
    return patient;
});
exports.getPatient = getPatient;
