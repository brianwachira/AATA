import {ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";
import { ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
/**
 * @description holds and creates apollo server
 */


const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
    
});

export default apolloServer;