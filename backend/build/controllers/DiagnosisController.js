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
exports.getDiagnosis = exports.getAllDiagnosis = exports.updateDiagnosis = exports.createDiagnosis = void 0;
const apollo_server_1 = require("apollo-server");
const Diagnosis_1 = __importDefault(require("../models/Diagnosis"));
/**
 * @description holds crud operations for diagnosis entity
 */
/**
 * creates Diagnosis
 * @param args {DiagnosisEntry} diagnosis
 * @returns {diagnosis} created diagnosis
 */
const createDiagnosis = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const newDiagnosis = new Diagnosis_1.default(args);
    try {
        yield newDiagnosis.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args
        });
    }
    return newDiagnosis;
});
exports.createDiagnosis = createDiagnosis;
/**
 * updates diagnosis
 * @param args diagnosis
 * @returns {diagnosis} updated diagnosis
 */
const updateDiagnosis = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let diagnosisToUpdate = yield Diagnosis_1.default.findById(args._id);
    if (!diagnosisToUpdate) {
        throw new apollo_server_1.UserInputError("diagnosis is not available", { invalidArgs: args });
    }
    diagnosisToUpdate = args;
    try {
        yield diagnosisToUpdate.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return diagnosisToUpdate;
});
exports.updateDiagnosis = updateDiagnosis;
/**
 * get all diagnosis
 * @returns {diagnosis[]} list all of diagnosis
 */
const getAllDiagnosis = () => __awaiter(void 0, void 0, void 0, function* () {
    const Alldiagnosis = yield Diagnosis_1.default.find();
    return Alldiagnosis;
});
exports.getAllDiagnosis = getAllDiagnosis;
/**
 * gets diagnosis by id
 * @param args id
 * @returns {diagnosis} diagnosis
 */
const getDiagnosis = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const singleDiagnosis = yield Diagnosis_1.default.findById(args);
    if (!singleDiagnosis) {
        throw new apollo_server_1.UserInputError('Diagnosis is not available', { invalidArgs: args.id });
    }
    return singleDiagnosis;
});
exports.getDiagnosis = getDiagnosis;
