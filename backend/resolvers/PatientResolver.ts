import { IResolvers } from "@graphql-tools/utils";
import { PatientMutation } from "../mutations/PatientMutation";
import { PatientQuery } from "../queries/PatientQuery";
import { parseString } from "../typeGuards";

/**
 * @description holds patient resolver
 */

export const PatientResolver: IResolvers = {
    Query: PatientQuery,
    Patient: {
        branchOfRegistry: (root) => {
            return {
                id: parseString(root.id),
                name: parseString(root.name),
                location:parseString( root.location)
            };
        }
    },
    Mutation: PatientMutation
};