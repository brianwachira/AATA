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
exports.getGuardian = exports.getAllGuardians = exports.updateGuardian = exports.createGuardian = void 0;
const apollo_server_1 = require("apollo-server");
const Guardians_1 = __importDefault(require("../models/Guardians"));
const Patients_1 = __importDefault(require("../models/Patients"));
/**
 * @description holds crud operations for guardian entity
 */
/**
 * creates Guardian
 * @param args {NewGuardianEntry} guardian
 * @returns {guardian} created guardian
 */
const createGuardian = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const patientExists = yield Patients_1.default.findById(args.patients);
    if (!patientExists) {
        throw new apollo_server_1.UserInputError("Patient not available", { invalidArgs: args });
    }
    const patientsArray = [];
    const guardian = new Guardians_1.default(Object.assign(Object.assign({}, args), { patients: patientsArray.concat(patientExists._id) }));
    try {
        const savedGuardian = yield guardian.save();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        patientExists.guardians = savedGuardian._id;
        yield patientExists.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return guardian;
});
exports.createGuardian = createGuardian;
/**
 * updates guardian
 * @param args guardian
 * @returns {guardian} updated guardian
 */
const updateGuardian = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let guardian = yield Guardians_1.default.findById(args._id);
    if (!guardian) {
        throw new apollo_server_1.UserInputError("Guardian not available", { invalidArgs: args });
    }
    guardian = args;
    try {
        yield guardian.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return guardian;
});
exports.updateGuardian = updateGuardian;
/**
 * get all guardians
 * @returns {guardian[]} list all of guardians
 */
const getAllGuardians = () => __awaiter(void 0, void 0, void 0, function* () {
    const guardian = yield Guardians_1.default.find();
    return guardian;
});
exports.getAllGuardians = getAllGuardians;
/**
 * gets guardian by id
 * @param args id
 * @returns {guardian} guardian
 */
const getGuardian = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const guardian = yield Guardians_1.default.findById(args);
    if (!guardian) {
        throw new apollo_server_1.UserInputError("Guardian is not available", { invalidArgs: args.id });
    }
    return guardian;
});
exports.getGuardian = getGuardian;
