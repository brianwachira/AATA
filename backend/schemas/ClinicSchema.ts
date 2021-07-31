import { gql } from "apollo-server";
/**
 * @description holds dispatch clinic schema
 */

export const ClinicSchema = gql`

type Clinic {
    id: ID!,
    name: String!,
    location: String!,
    createdBy: String!,
    staff: [String]
}
extend type Query {
    clinics: [Clinic],
    clinic(id: String!): Clinic
}
extend type Mutation{
    createClinic(
        name: String!,
        location: String!,
        createdBy: String!,
        staff:[String]): Clinic
    updateClinic(
        name: String!,
        location: String!,
        staff:[String]): Clinic
    
}
`;