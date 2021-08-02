import { IResolvers } from "@graphql-tools/utils";
import { ConsultationRatingMutation } from "../mutations/ConsultationRatingMutation";
import { ConsultationRatingQuery } from "../queries/ConsultationRatingQuery";

/**
 * @description holds consultation rating resolver
 */

export const ConsultationRatingResolver : IResolvers = {
    Query: ConsultationRatingQuery,
    Mutation: ConsultationRatingMutation
};