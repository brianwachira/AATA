import { IResolvers } from "@graphql-tools/utils";
import { RemedyMutation } from "../mutations/RemedyMutation";
import { RemedyQuery } from "../queries/RemedyQuery";

/**
 * @description holds remedy resolver
 */
export const RemedyResolver: IResolvers = {
    Query: RemedyQuery,
    Mutation: RemedyMutation
};