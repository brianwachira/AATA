"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds dispatch clinic schema
 */
exports.ClinicSchema = apollo_server_1.gql `

type Clinic {
    id: ID!,
    name: String!,
    location: String!,
    createdBy: Admin!,
}
extend type Query {
    clinics: [Clinic],
    clinic(id: String!): Clinic
}
extend type Mutation{
    createClinic(
        name: String!
        location: String!
        createdBy: String!
        staff:[String]): Clinic
    updateClinic(
        id: ID!
        name: String!
        location: String!
        createdBy: String!
        staff:[String]): Clinic
    
}
`;
