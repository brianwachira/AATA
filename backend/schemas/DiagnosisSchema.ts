import { gql } from "apollo-server";

export const DiagnosisSchema = gql`
type Diagnosis {
    code: String!,
    name: String!,
    description: String!,
    remedies: [Diagnosis!]
}
extend type Query{
    allDiagnosis: [Diagnosis],
    diagnosis(id: String!): Diagnosis
}
extend type Mutation{
    createDiagnosis(
        code: String!,
        name: String!,
        description: String!,
        remedies: [String!]): Diagnosis,
    updateDiagnosis(
        code: String!,
        name: String!,
        description: String!,
        remedies: [String!]): Diagnosis
}
`;