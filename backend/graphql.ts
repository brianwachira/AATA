import {ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";

/**
 * @description holds and creates apollo server
 */

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

export default apolloServer;