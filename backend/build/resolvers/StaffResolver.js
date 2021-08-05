"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffResolver = void 0;
const StaffMutation_1 = require("../mutations/StaffMutation");
const StaffQuery_1 = require("../queries/StaffQuery");
/**
 * @description holds staff resolver
 */
exports.StaffResolver = {
    Query: StaffQuery_1.StaffQuery,
    Mutation: StaffMutation_1.StaffMutation
};
