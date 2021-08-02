import { gql } from "apollo-server";

/**
 * @description holds consultation schema
 */

export const ConsultationSchema = gql`
type Consultation {
    id: String!,
    patient: Patient!,
    staff: [Staff!]!,
    branch: Clinic!,
    diagnosis: [String!]!,
}
extend type Query{
    consultations: [Consultation]
    consultation(id: String!): Consultation
}
extend type Mutation{
    createConsultation(
        id: String!,
        patient: String!,
        staff: [String!]!,
        branch: String!,
        diagnosis: [String!]!): Consultation,
    updateConsultation(
        id: String!,
        patient: String!,
        staff: [String!]!,
        branch: String!,
        diagnosis: [String!]!): Consultation
}
`;