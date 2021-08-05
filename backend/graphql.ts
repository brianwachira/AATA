import {ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";

/**
 * @description holds and creates apollo server
 */

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,  
    playground: true, 
    
});

export default apolloServer;