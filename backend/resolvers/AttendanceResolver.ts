import { IResolvers } from "@graphql-tools/utils";
import { AttendanceMutation } from "../mutations/AttendanceMutation";
import { AttendanceQuery } from "../queries/AttendanceQuery";

/**
 * @description holds attendance resolver
 */

export const AttendanceResolver: IResolvers= {
    Query: AttendanceQuery,
    Mutation: AttendanceMutation
};