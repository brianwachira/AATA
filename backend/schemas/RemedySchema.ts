import { gql } from "apollo-server";

export const RemedySchema = gql`
type Remedy {
    id: String!,
    code: String!,
    name: String!,
    description: String!
}
extend type Query{
    remedies: [Remedy]
    remedy(id:String!): Remedy
}
extend type Mutation{
    createRemedy(
        id: String!,
        code: String!,
        name: String!,
        description: String!): Remedy,
    updateRemedy(
        id: String!,
        code: String!,
        name: String!): Remedy

}
`;