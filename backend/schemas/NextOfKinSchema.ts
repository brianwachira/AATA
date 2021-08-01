import { gql } from "apollo-server";

/**
 * @description holds nextofkin schema
 */

export const NextOfKinSchema = gql`
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
    patients: [Patient!]!
}
extend type Query{
    nextofkins: [NextOfKin]
    nextofkin(id: String!): Guardian
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
    relationship: String!,
    # patients is a string coz we want the id only
    patients: String!): NextOfKin,

    updateNextOfKin(
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
