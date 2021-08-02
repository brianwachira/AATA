import { IResolvers } from "@graphql-tools/utils";
import { DiagnosisMutation } from "../mutations/DiagnosisMutation";
import { DiagnosisQuery } from "../queries/DiagnosisQuery";

/**
 * @description holds diagnosis resolver
 */

export const DiagnosisResolver: IResolvers = {
    Query: DiagnosisQuery,
    Mutation: DiagnosisMutation
};