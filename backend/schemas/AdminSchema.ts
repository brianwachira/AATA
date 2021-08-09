import { gql } from "apollo-server";
/**
 * @description holds admin schema
 */

export const AdminSchema = gql`
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
    clinicsLaunched:[Clinic],
    createdAt: String!,
    updatedAt: String!
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