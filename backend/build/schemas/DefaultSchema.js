"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSchema = void 0;
const apollo_server_1 = require("apollo-server");
/**
 * @description holds default schema
 */
exports.DefaultSchema = apollo_server_1.gql `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
