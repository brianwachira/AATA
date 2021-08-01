import { gql } from "apollo-server";
/**
 * @description holds dispatch staff schema
 */

export const StaffSchema = gql`
type Staff {
    id: ID!,
    firstName: String!,
    lastName: String!,
    DOB: String!,
    gender: String!,
    nationalID: String!,
    phoneNo: String!,
    email: String!,
    staffType: String!,
    branch:[Clinic],
    consultations:[String],
    nextOfKin:[String]    
}
extend type Query {
    staff: [Staff]
    staffMember(id: String!): Staff
}
extend type Mutation{
    createStaff(
        firstName: String!,
        lastName: String!,
        DOB: String!,
        gender: String!,
        nationalID: String!,
        phoneNo: String!,
        email: String!,
        staffType: String!,
        branch:[String],
        consultations:[String],
        nextOfKin:[String]): Staff
    updateStaff(
        id: ID!,
        firstName: String!,
        lastName: String!,
        DOB: String!,
        gender: String!,
        nationalID: String!,
        phoneNo: String!,
        email: String!,
        staffType: String!,
        branch:[String],
        consultations:[String],
        nextOfKin:[String]): Staff
}
`;