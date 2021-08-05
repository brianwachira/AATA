"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchOfficerSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds dispatch officer schema
 */
exports.DispatchOfficerSchema = apollo_server_1.gql `
type DispatchOfficer {
    id: ID!,
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    password: String!,
    assessments:[String]
}
extend type Query {
    dispatchOfficers: [DispatchOfficer]
    dispatchOfficer(id: String!): DispatchOfficer
}
extend type Mutation {
    createDispatchOfficer(
        firstName: String!,
        lastName: String!,
        DOB: String!,
        gender: String!,
        nationalID: String!,
        phoneNo: String!,
        email: String!,
        password: String!,
        assessments:[String]): DispatchOfficer
    updateDispatchOfficer(
        firstName: String!,
        lastName: String!,
        DOB: String!,
        gender: String!,
        nationalID: String!,
        phoneNo: String!,
        email: String!,
        password: String!
        assessments:[String]): DispatchOfficer
}
`;
