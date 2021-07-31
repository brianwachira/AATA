import { ClinicMutation } from "../mutations/ClinicMutation";
import { ClinicQuery } from "../queries/ClinicQuery";
import { IResolvers } from "@graphql-tools/utils";

/**
 * @description holds clinic resolver
 */

export const ClinicResolver: IResolvers = {
    Query: ClinicQuery,
    Mutation: ClinicMutation
};