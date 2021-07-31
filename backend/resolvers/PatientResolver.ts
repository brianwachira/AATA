import { IResolvers } from "@graphql-tools/utils";
import { PatientMutation } from "../mutations/PatientMutation";
import { PatientQuery } from "../queries/PatientQuery";

/**
 * @description holds patient resolver
 */

export const PatientResolver: IResolvers = {
    Query: PatientQuery,
    Mutation: PatientMutation
};