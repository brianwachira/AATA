import { IResolvers } from "@graphql-tools/utils";
import { ConsultationMutation } from "../mutations/ConsultationMutation";
import { ConsultationQuery } from "../queries/ConsultationQuery";

/**
 * @description holds consultation resolver
 */

export const ConsultationResolver: IResolvers = {
    Query: ConsultationQuery,
    Mutation: ConsultationMutation
};