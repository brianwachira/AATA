"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds consultation schema
 */
exports.ConsultationSchema = apollo_server_1.gql `
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
