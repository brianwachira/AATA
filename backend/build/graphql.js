"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = require("./resolvers");
const schemas_1 = require("./schemas");
const apollo_server_core_1 = require("apollo-server-core");
/**
 * @description holds and creates apollo server
 */
const apolloServer = new apollo_server_1.ApolloServer({
    typeDefs: schemas_1.schema,
    resolvers: resolvers_1.resolvers,
    introspection: true,
    plugins: [
        apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});
exports.default = apolloServer;
