"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds patient schema
 */
exports.PatientSchema = apollo_server_1.gql `
type Patient {
    id: ID!,
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String,
    phoneNo: String,
    email: String,
    branchOfRegistry: Clinic!,
    guardian: Guardian,
    nextOfKin:String,
    consultations:[String]
}
extend type Query {
    patients: [Patient]
    patient(id: String!): Patient
}
extend type Mutation {
    createPatient(
        firstName: String!,
        lastName: String!,
        DOB: String!,
        gender: String!,
        nationalID: String,
        phoneNo: String,
        email: String,
        branchOfRegistry: String!,
        guardian: String,
        nextOfKin:String
        consultations:[String]): Patient
    updatePatient(
        id: ID!,
        firstName: String!,
        lastName: String!,
        DOB: String!,
        gender: String!,
        nationalID: String,
        phoneNo: String,
        email: String,
        branchOfRegistry: String!,
        guardian: String,
        nextOfKin:String,
        consultations:[String]): Patient

}
`;
