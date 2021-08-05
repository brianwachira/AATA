"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds admin schema
 */
exports.AdminSchema = apollo_server_1.gql `
type Admin {
    id: ID!,
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    password: String!,
    clinicsLaunched:[Clinic]
}
extend type Query {
    admins: [Admin]
    admin(id: String!): Admin
}
extend type Mutation {
    createAdmin(
        firstName: String!
        lastName: String!
        DOB: String!
        gender: String!
        nationalID: String!
        phoneNo: String!
        email: String!
        password: String!
        clinicsLaunched:[String]): Admin
    updateAdmin(
        clinicsLaunched:[String!]!): Admin
}
`;
