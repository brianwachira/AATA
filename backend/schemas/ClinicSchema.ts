import { gql } from "apollo-server";
/**
 * @description holds dispatch clinic schema
 */

export const ClinicSchema = gql`

type Clinic {
    id: ID!,
    name: String!,
    location: String!,
    createdBy: Admin!,
    createdAt: String!,
    updatedAt: String!,
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