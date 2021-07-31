import { gql } from "apollo-server";
/**
 * @description holds dispatch officer schema
 */

export const DispatchOfficerSchema = gql`
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