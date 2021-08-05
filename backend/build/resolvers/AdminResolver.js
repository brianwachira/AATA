"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminResolver = void 0;
const AdminQuery_1 = require("../queries/AdminQuery");
const AdminMutation_1 = require("../mutations/AdminMutation");
/**
 * @description holds admin resolver
 */
exports.AdminResolver = {
    Query: AdminQuery_1.AdminQuery,
    Mutation: AdminMutation_1.AdminMutation
};
