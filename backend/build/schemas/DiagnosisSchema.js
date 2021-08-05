"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisSchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.DiagnosisSchema = apollo_server_1.gql `
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
