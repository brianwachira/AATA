"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextOfKinSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds nextofkin schema
 */
exports.NextOfKinSchema = apollo_server_1.gql `
type NextOfKin {
    id: ID!,
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    relationship: String!,
}
extend type Query{
    nextofkins: [NextOfKin]
    nextofkin(id: String!): NextOfKin
}
extend type Mutation{
    createNextOfKin(
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    relationship: String!) : NextOfKin

    updateNextOfKin(
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    relationship: String!): NextOfKin
}
`;
