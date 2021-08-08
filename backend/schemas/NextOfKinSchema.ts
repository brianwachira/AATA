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
    createdAt: String!,
    updatedAt: String!
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
