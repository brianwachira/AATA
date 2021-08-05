"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemedyResolver = void 0;
const RemedyMutation_1 = require("../mutations/RemedyMutation");
const RemedyQuery_1 = require("../queries/RemedyQuery");
/**
 * @description holds remedy resolver
 */
exports.RemedyResolver = {
    Query: RemedyQuery_1.RemedyQuery,
    Mutation: RemedyMutation_1.RemedyMutation
};
