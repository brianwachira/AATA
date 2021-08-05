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
exports.getAdmin = exports.getAllAdmins = exports.updateAdmin = exports.createAdmin = void 0;
const apollo_server_1 = require("apollo-server");
const Admins_1 = __importDefault(require("../models/Admins"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const typeGuards_1 = require("../typeGuards");
/**
 *
 * @description holds crud operations for the admin entity
 */
/**
 * creates admin
 * @param args {NewAdminEntry} admin
 * @returns {admin} created Admin
 */
const createAdmin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    /**
     * hash password using bycrypt
     * use typeguards to ensure return value is a string
     **/
    //eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const passwordHash = typeGuards_1.parseString(yield bcrypt_1.default.hash(args.password, saltRounds));
    const admin = new Admins_1.default(Object.assign(Object.assign({}, args), { password: passwordHash }));
    try {
        yield admin.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args,
        });
    }
    return admin;
});
exports.createAdmin = createAdmin;
/**
 * updates admin
 * @param args admin
 * @returns {admin} updated Admin
 */
const updateAdmin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield Admins_1.default.findOne({ email: args.email });
    if (!admin) {
        throw new apollo_server_1.UserInputError("User is not available", { invalidArgs: args });
    }
    admin.clinicsLaunched = args.clinicsLaunched;
    try {
        yield admin.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return admin;
});
exports.updateAdmin = updateAdmin;
/**
 * gets all admins
 * @returns {admin[]} list of all admins
 */
const getAllAdmins = () => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield Admins_1.default.find({}).populate('clinicsLaunched');
    return admins;
});
exports.getAllAdmins = getAllAdmins;
/**
 * gets admin
 * @param args id
 * @returns {admin} admin
 */
const getAdmin = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield Admins_1.default.findById(args);
    if (!admin) {
        throw new apollo_server_1.UserInputError("User is not available", { invalidArgs: args.id });
    }
    return admin;
});
exports.getAdmin = getAdmin;
