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
exports.getConsultation = exports.getAllConsultations = exports.updateConsultation = exports.createConsultation = void 0;
const apollo_server_1 = require("apollo-server");
const Clinics_1 = __importDefault(require("../models/Clinics"));
const Consultations_1 = __importDefault(require("../models/Consultations"));
const Patients_1 = __importDefault(require("../models/Patients"));
const Staff_1 = __importDefault(require("../models/Staff"));
const typeGuards_1 = require("../typeGuards");
/**
 * @description holds crud operations for consultation entity
 */
/**
 * creates Consultation
 * @param args {NewConsultationEntry} Consultation
 * @returns {consultation} created Consultation
 */
const createConsultation = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const patientExists = yield Patients_1.default.findById(args.patient);
    if (!patientExists) {
        throw new apollo_server_1.UserInputError("Patient not available", { invalidArgs: args });
    }
    const stafftoload = args.staff;
    const staffexists = stafftoload.map((id) => __awaiter(void 0, void 0, void 0, function* () {
        const staffFound = yield Staff_1.default.findById(id);
        if (!staffFound) {
            throw new apollo_server_1.UserInputError("Staff not available", { invalidArgs: id });
        }
        return staffFound;
    }));
    const clinicExists = yield Clinics_1.default.findById(args.branch);
    if (!clinicExists) {
        throw new apollo_server_1.UserInputError("Clinic not available", { invalidArgs: args });
    }
    let newConsultation = new Consultations_1.default(args);
    try {
        const savedNewConsultation = yield newConsultation.save();
        newConsultation = savedNewConsultation;
        patientExists.consultations = patientExists.consultations.concat(typeGuards_1.parseString(savedNewConsultation._id));
        yield patientExists.save();
        const write = () => {
            staffexists.map((staffmember) => __awaiter(void 0, void 0, void 0, function* () {
                (yield staffmember).consultations = (yield staffmember).consultations.concat(typeGuards_1.parseString(savedNewConsultation._id));
                yield (yield staffmember).save();
            }));
        };
        write();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newConsultation;
});
exports.createConsultation = createConsultation;
/**
 * updates Consultation
 * @param args Consultation
 * @returns {consultation} updated Consultation
 */
const updateConsultation = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let consultation = yield Consultations_1.default.findById(args._id);
    if (!consultation) {
        throw new apollo_server_1.UserInputError("Guardian not available", { invalidArgs: args });
    }
    consultation = args;
    try {
        yield consultation.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return consultation;
});
exports.updateConsultation = updateConsultation;
/**
 * get all Consultations
 * @returns {consultation[]} list all of Consultations
 */
const getAllConsultations = () => __awaiter(void 0, void 0, void 0, function* () {
    const consultations = yield Consultations_1.default.find({}).populate('patients staff branch diagnosis');
    return consultations;
});
exports.getAllConsultations = getAllConsultations;
/**
 * gets Consultation by id
 * @param args id
 * @returns {consultation} Consultation
 */
const getConsultation = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const consultation = yield Consultations_1.default.findById(args).populate('patients staff branch diagnosis');
    if (!consultation) {
        throw new apollo_server_1.UserInputError("Consultation is not available", { invalidArgs: args.id });
    }
    return consultation;
});
exports.getConsultation = getConsultation;
