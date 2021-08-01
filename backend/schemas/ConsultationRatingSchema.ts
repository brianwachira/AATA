import { gql } from "apollo-server";

/**
 * @description holds consultation rating schema
 */

export const ConsultationRatingSchema = gql`
type ConsultationRating {
    id: String!,
    consultationID: Consultation!,
    rating: number!,
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
        rating: number!,
        comment: String!): ConsultationRating,
    updateConsultationRating(
        id: String!,
        consultationID: String!,
        rating: number!,
        comment: String!): ConsultationRating
}
`;