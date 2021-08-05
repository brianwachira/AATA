"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisResolver = void 0;
const DiagnosisMutation_1 = require("../mutations/DiagnosisMutation");
const DiagnosisQuery_1 = require("../queries/DiagnosisQuery");
/**
 * @description holds diagnosis resolver
 */
exports.DiagnosisResolver = {
    Query: DiagnosisQuery_1.DiagnosisQuery,
    Mutation: DiagnosisMutation_1.DiagnosisMutation
};
