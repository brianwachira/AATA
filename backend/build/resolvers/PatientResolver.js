"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientResolver = void 0;
const PatientMutation_1 = require("../mutations/PatientMutation");
const PatientQuery_1 = require("../queries/PatientQuery");
const typeGuards_1 = require("../typeGuards");
/**
 * @description holds patient resolver
 */
exports.PatientResolver = {
    Query: PatientQuery_1.PatientQuery,
    Patient: {
        branchOfRegistry: (root) => {
            return {
                id: typeGuards_1.parseString(root.id),
                name: typeGuards_1.parseString(root.name),
                location: typeGuards_1.parseString(root.location)
            };
        }
    },
    Mutation: PatientMutation_1.PatientMutation
};
