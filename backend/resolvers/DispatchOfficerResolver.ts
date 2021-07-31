import { DispatchOfficerQuery } from "../queries/DispatchOfficerQuery";
import { DispatchOfficerMutation } from "../mutations/DispatchOfficerMutation";
import { IResolvers } from "@graphql-tools/utils";

/**
 * @description holds dispatch officer resolver
 */

export const DispatchOfficerResolver: IResolvers = {
    Query: DispatchOfficerQuery,
    Mutation: DispatchOfficerMutation
};