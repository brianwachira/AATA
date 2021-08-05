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
exports.getDispatchOfficer = exports.getAllDispatchOfficers = exports.updateDispatchOfficer = exports.createDispatchOfficer = void 0;
const apollo_server_1 = require("apollo-server");
const DipatchOfficers_1 = __importDefault(require("../models/DipatchOfficers"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const typeGuards_1 = require("../typeGuards");
//createDispatchOfficer, updateDispatchOfficer
//getDispatchOfficer, getAllDispatchOfficers
/**
 * @description holds crud operations for the dispatch officer entity
 */
/**
 * creates dispatch officer
 * @param args {NewDispatchOfficer} dispatch officer
 * @returns {dispatchOfficer} created dispatch officer
 */
const createDispatchOfficer = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    /**
     * hash password using bycrypt
     * use typeguards to ensure return value is a string
     **/
    //eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const passwordHash = typeGuards_1.parseString(yield bcrypt_1.default.hash(args.password, saltRounds));
    const dispatchOfficer = new DipatchOfficers_1.default(Object.assign(Object.assign({}, args), { password: passwordHash }));
    try {
        yield dispatchOfficer.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return dispatchOfficer;
});
exports.createDispatchOfficer = createDispatchOfficer;
/**
 * updates Dispatch Officer
 * @param args dispatch officer
 * @returns {dispatchOfficer} updated dispatch officer
 */
const updateDispatchOfficer = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let dispatchOfficer = yield DipatchOfficers_1.default.findOne({ email: args.email });
    if (!dispatchOfficer) {
        throw new apollo_server_1.UserInputError("Dispatch Officer account not available", { invalidArgs: args });
    }
    dispatchOfficer = args;
    try {
        yield dispatchOfficer.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return dispatchOfficer;
});
exports.updateDispatchOfficer = updateDispatchOfficer;
/**
 * get all dispatch officers
 * @returns {dispatchOfficer[]} list all of dispatch officers
 */
const getAllDispatchOfficers = () => __awaiter(void 0, void 0, void 0, function* () {
    const dispatchOfficers = yield DipatchOfficers_1.default.find();
    return dispatchOfficers;
});
exports.getAllDispatchOfficers = getAllDispatchOfficers;
/**
 * gets dispatch officer
 * @param args id
 * @returns {dispatchOfficer} dispatch officer
 */
const getDispatchOfficer = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const dispatchOfficer = yield DipatchOfficers_1.default.findById(args);
    if (!dispatchOfficer) {
        throw new apollo_server_1.UserInputError("User is not available", { invalidArgs: args.id });
    }
    return dispatchOfficer;
});
exports.getDispatchOfficer = getDispatchOfficer;
