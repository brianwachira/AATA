"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianResolver = void 0;
const GuardianMutation_1 = require("../mutations/GuardianMutation");
const GuardianQuery_1 = require("../queries/GuardianQuery");
/**
 * @description holds guardian resolver
 */
exports.GuardianResolver = {
    Query: GuardianQuery_1.GuardianQuery,
    Mutation: GuardianMutation_1.GuardianMutation
};
