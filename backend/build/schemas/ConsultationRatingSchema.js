"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationRatingSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds consultation rating schema
 */
exports.ConsultationRatingSchema = apollo_server_1.gql `
type ConsultationRating {
    id: String!,
    consultationID: Consultation!,
    rating: Int!,
    comment: String!,
}
extend type Query{
    consultationRatings: [ConsultationRating]
    consultationRating(id: String!): ConsultationRating
}
extend type Mutation{
    createConsultationRating(
        id: String!,
        consultationID: String!,
        rating: Int!,
        comment: String!): ConsultationRating,
    updateConsultationRating(
        id: String!,
        consultationID: String!,
        rating: Int!,
        comment: String!): ConsultationRating
}
`;
