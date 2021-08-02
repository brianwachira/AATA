import { gql } from "apollo-server";

export const IssuesSchema = gql`
type Issue {
    branchID: Clinic!,
    title: String!,
    description: String!,
    filedBy: DispatchOfficer!,
    isSolved: Boolean!
}
extend type Query {
    issues: [Issue],
    issue(id: String!): Issue
}
extend type Mutation{
    createIssue(
        branchID: String!,
        title: String!,
        description: String!,
        filedBy: String!,
        isSolvSed: Boolean!): Issue,
    updateIssue(
        branchID: String!,
        title: String!,
        description: String!,
        filedBy: String!,
        isSolved: Boolean!): Issue

}
`;