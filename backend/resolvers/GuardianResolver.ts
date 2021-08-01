import { IResolvers } from "@graphql-tools/utils";
import { GuardianMutation } from "../mutations/GuardianMutation";
import { GuardianQuery } from "../queries/GuardianQuery";

/**
 * @description holds guardian resolver
 */

export const GuardianResolver: IResolvers = {
    Query: GuardianQuery,
    Mutation: GuardianMutation
};