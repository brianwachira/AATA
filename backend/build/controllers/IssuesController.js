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
exports.getIssue = exports.getIssues = exports.updateIssue = exports.createIssue = void 0;
const apollo_server_1 = require("apollo-server");
const Issues_1 = __importDefault(require("../models/Issues"));
/**
 * @description holds crud operations for diagnosis entity
 */
/**
 * creates Issue
 * @param args {NewIssueEntry} issue
 * @returns {issue} created issue
 */
const createIssue = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const newIssue = new Issues_1.default(args);
    try {
        yield newIssue.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, {
            invalidArgs: args
        });
    }
    return newIssue;
});
exports.createIssue = createIssue;
/**
 * updates issue
 * @param args issue
 * @returns {issue} updated issue
 */
const updateIssue = (args) => __awaiter(void 0, void 0, void 0, function* () {
    let issueToUpdate = yield Issues_1.default.findById(args._id);
    if (!issueToUpdate) {
        throw new apollo_server_1.UserInputError("Issue is not available", { invalidArgs: args });
    }
    issueToUpdate = args;
    try {
        yield issueToUpdate.save();
    }
    catch (error) {
        throw new apollo_server_1.UserInputError(error.message, { invalidArgs: args });
    }
    return issueToUpdate;
});
exports.updateIssue = updateIssue;
/**
 * get all issues
 * @returns {issue[]} list all of issues
 */
const getIssues = () => __awaiter(void 0, void 0, void 0, function* () {
    const allIssues = yield Issues_1.default.find();
    return allIssues;
});
exports.getIssues = getIssues;
/**
 * gets issue by id
 * @param args id
 * @returns {issue} issue
 */
const getIssue = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const singleIssue = yield Issues_1.default.findById(args);
    if (!singleIssue) {
        throw new apollo_server_1.UserInputError('Issues is not available', { invalidArgs: args.id });
    }
    return singleIssue;
});
exports.getIssue = getIssue;
