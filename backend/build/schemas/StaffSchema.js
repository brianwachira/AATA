"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds dispatch staff schema
 */
exports.StaffSchema = apollo_server_1.gql `
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
    nextOfKin:String    
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
        nextOfKin:String): Staff
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
        nextOfKin:String): Staff
}
`;
