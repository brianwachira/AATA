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
exports.getRemedy = exports.getAllRemedies = exports.updateRemedy = exports.createRemedy = void 0;
const apollo_server_1 = require("apollo-server");
const Remedies_1 = __importDefault(require("../models/Remedies"));
/**
 * @description holds crud operations for remedy entity
 */
/**
 * creates Remedy
 * @param args {NewRemedyEntry} remedy
 * @returns {remedy} created remedy
 */
const createRemedy = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const newremedy = new Remedies_1.default(args);
    try {
        yield newremedy.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return newremedy;
});
exports.createRemedy = createRemedy;
/**
 * updates Remedy
 * @param args remedy
 * @returns {remedy} updated remedy
 */
const updateRemedy = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let remedyToUpdate = yield Remedies_1.default.findById(args._id);
    if (!remedyToUpdate) {
        throw new apollo_server_1.UserInputError("Remedy not available", { invalidArgs: args });
    }
    remedyToUpdate = args;
    try {
        yield remedyToUpdate.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return remedyToUpdate;
});
exports.updateRemedy = updateRemedy;
/**
 * get all remediess
 * @returns {remedy[]} list all of remedies
 */
const getAllRemedies = () => __awaiter(void 0, void 0, void 0, function* () {
    const Allremedy = yield Remedies_1.default.find();
    return Allremedy;
});
exports.getAllRemedies = getAllRemedies;
/**
 * gets remedy by id
 * @param args id
 * @returns {remedies} remedy
 */
const getRemedy = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const singleRemedy = yield Remedies_1.default.findById(args);
    if (!singleRemedy) {
        throw new apollo_server_1.UserInputError("Remedy is not available", { invalidArgs: args.id });
    }
    return singleRemedy;
});
exports.getRemedy = getRemedy;
