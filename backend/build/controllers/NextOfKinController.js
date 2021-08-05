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
exports.getNextOfKin = exports.getAllNextOfKins = exports.updateNextofKin = exports.createNextOfKin = void 0;
const apollo_server_1 = require("apollo-server");
const NextOfKin_1 = __importDefault(require("../models/NextOfKin"));
/**
 * @description holds crud operations for nextofkin entity
 */
/**
 * creates NextOfKin
 * @param args {NewNextOfKinEntry} NextOfKin
 * @returns {nextofkin} created NextOfKin
 */
const createNextOfKin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const nextofkin = new NextOfKin_1.default(args);
    try {
        yield nextofkin.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return nextofkin;
});
exports.createNextOfKin = createNextOfKin;
/**
 * updates NextOfKin
 * @param args NextOfKin
 * @returns {nextOfKin} updated NextOfKin
 */
const updateNextofKin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let nextofkin = yield NextOfKin_1.default.findById(args._id);
    if (!nextofkin) {
        throw new apollo_server_1.UserInputError("The next of kin is not available", { invalidArgs: args });
    }
    nextofkin = args;
    try {
        yield nextofkin.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return nextofkin;
});
exports.updateNextofKin = updateNextofKin;
/**
 * get all NextOfKins
 * @returns {nextOfKin[]} list all of NextOfKins
 */
const getAllNextOfKins = () => __awaiter(void 0, void 0, void 0, function* () {
    const nextofkin = yield NextOfKin_1.default.find();
    return nextofkin;
});
exports.getAllNextOfKins = getAllNextOfKins;
/**
 * gets NextOfKin by id
 * @param args id
 * @returns {nextOfKin} NextOfKin
 */
const getNextOfKin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const nextofkin = yield NextOfKin_1.default.findById(args);
    if (!nextofkin) {
        throw new apollo_server_1.UserInputError("Guardian is not available", { invalidArgs: args.id });
    }
    return nextofkin;
});
exports.getNextOfKin = getNextOfKin;
