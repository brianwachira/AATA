import { gql } from "apollo-server";

export const IssuesSchema = gql`
type Issue {
    branch: Clinic!,
    staff: Staff,
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
        branch: String!,
        staff: String,
        title: String!,
        description: String!,
        filedBy: String!,
        isSolvSed: Boolean!): Issue,
    updateIssue(
        branch: String!,
        staff: String,
        title: String!,
        description: String!,
        filedBy: String!,
        isSolved: Boolean!): Issue

}
`;