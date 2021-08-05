"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.IssuesSchema = apollo_server_1.gql `
type Issue {
    branchID: Clinic!,
    title: String!,
    description: String!,
    filedBy: DispatchOfficer!,
    isSolved: Boolean!
}
extend type Query {
    issues: [Issue],
    issue(id: String!): Issue
}
extend type Mutation{
    createIssue(
        branchID: String!,
        title: String!,
        description: String!,
        filedBy: String!,
        isSolvSed: Boolean!): Issue,
    updateIssue(
        branchID: String!,
        title: String!,
        description: String!,
        filedBy: String!,
        isSolved: Boolean!): Issue

}
`;
