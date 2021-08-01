import { IResolvers } from "@graphql-tools/utils";
import { NextOfKinMutation } from "../mutations/NextOfKinMutation";
import { NextOfKinQuery } from "../queries/NextOfKinQuery";

/**
 * @description holds nextofkin resolver
 */

export const NextOfKinResolver: IResolvers ={
    Query: NextOfKinQuery,
    Mutation: NextOfKinMutation
};