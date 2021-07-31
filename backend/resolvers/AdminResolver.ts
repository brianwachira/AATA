import { AdminQuery } from "../queries/AdminQuery";
import { AdminMutation } from "../mutations/AdminMutation";
import { IResolvers } from "@graphql-tools/utils";

/**
 * @description holds admin resolver
 */

export const AdminResolver: IResolvers = {
    Query: AdminQuery,
    Mutation: AdminMutation
};