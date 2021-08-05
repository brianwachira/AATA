"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchOfficerResolver = void 0;
const DispatchOfficerQuery_1 = require("../queries/DispatchOfficerQuery");
const DispatchOfficerMutation_1 = require("../mutations/DispatchOfficerMutation");
/**
 * @description holds dispatch officer resolver
 */
exports.DispatchOfficerResolver = {
    Query: DispatchOfficerQuery_1.DispatchOfficerQuery,
    Mutation: DispatchOfficerMutation_1.DispatchOfficerMutation
};
