import { gql } from "apollo-server";

/**
 * @description holds patient schema
 */

export const PatientSchema = gql`
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
    nextOfKin:[String],
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
        branchOfRegistry: Clinic!,
        guardian: String,
        nextOfKin:[String]
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
        branchOfRegistry: Clinic!,
        guardian: String,
        nextOfKin:[String],
        consultations:[String]): Patient

}
`;