"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicResolver = void 0;
const ClinicMutation_1 = require("../mutations/ClinicMutation");
const ClinicQuery_1 = require("../queries/ClinicQuery");
/**
 * @description holds clinic resolver
 */
exports.ClinicResolver = {
    Query: ClinicQuery_1.ClinicQuery,
    Mutation: ClinicMutation_1.ClinicMutation
};
