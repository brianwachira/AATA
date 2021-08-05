"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds guardian schema
 */
exports.GuardianSchema = apollo_server_1.gql `
type Guardian {
    id: ID!,
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    relationship: String!,
    patients: [Patient!]!
}
extend type Query{
    guardians: [Guardian]
    guardian(id: String!): Guardian
}
extend type Mutation{
    createGuardian(
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    relationship: String!,
    # patients is a string coz we want the id only
    patients: String!): Guardian,

    updateGuardian(
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    relationship: String!,
    patients: [String!]!): Guardian
}
`;
