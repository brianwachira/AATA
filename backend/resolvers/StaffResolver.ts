import { StaffMutation } from "../mutations/StaffMutation";
import { StaffQuery } from "../queries/StaffQuery";
import { IResolvers } from "@graphql-tools/utils";

/**
 * @description holds staff resolver
 */

export const StaffResolver: IResolvers ={
    Query: StaffQuery,
    Mutation: StaffMutation
};