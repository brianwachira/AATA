"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesResolver = void 0;
const IssuesMutation_1 = require("../mutations/IssuesMutation");
const IssuesQuery_1 = require("../queries/IssuesQuery");
/**
 * @description holds issues resolver
 */
exports.IssuesResolver = {
    Query: IssuesQuery_1.IssuesQuery,
    Mutation: IssuesMutation_1.IssuesMutation
};
