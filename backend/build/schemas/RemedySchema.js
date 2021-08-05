"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemedySchema = void 0;
const apollo_server_1 = require("apollo-server");
exports.RemedySchema = apollo_server_1.gql `
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
