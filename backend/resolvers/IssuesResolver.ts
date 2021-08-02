import { IResolvers } from "@graphql-tools/utils";
import { IssuesMutation } from "../mutations/IssuesMutation";
import { IssuesQuery } from "../queries/IssuesQuery";

/**
 * @description holds issues resolver
 */

export const IssuesResolver: IResolvers = {
    Query: IssuesQuery,
    Mutation: IssuesMutation
};