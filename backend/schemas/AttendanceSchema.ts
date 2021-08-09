import { gql } from "apollo-server";

/**
 * @description holds attendance schema
 */

export const AttendanceSchema = gql`
type Attendance {
    id: String!,
    staff: Staff!,
    branch: Clinic!,
    isClockedOut: Boolean,
    createdAt: String!,
    updatedAt: String!
}
extend type Query{
    allAttendance: [Attendance],
    attendance(id: String!): Attendance
}
extend type Mutation{
    createAttendance(
        staff: String!,
        branch: String!,
        isClockedOut: Boolean!): Attendance,
    updateAttendance(
        id: String!): Attendance
}
`;