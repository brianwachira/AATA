import { gql } from "apollo-server";

/**
 * @description holds guardian schema
 */

export const GuardianSchema = gql`
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
    createdAt: String!,
    updatedAt: String!
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
    relationship: String!): Guardian,

    updateGuardian(
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    relationship: String!): Guardian
}
`;
