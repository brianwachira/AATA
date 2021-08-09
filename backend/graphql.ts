import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";
import jwt, { JwtPayload } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import DispatchOfficer from "./models/DipatchOfficers";
import { parseString } from "./typeGuards";
/**
 * @description holds and creates apollo server
 */


//inside your starter code, do this
dotenv.config();

interface decodedTokenType extends JwtPayload {
    firstName: string,
    lastName: string,
    id: string
}

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: async ({ req }): Promise<any> => {
        const auth = req ? req.headers.authorization : null;
        if (auth && auth.toLowerCase().startsWith('bearer')) {
            const decodedToken = jwt.verify(
                auth.substring(7), parseString(process.env.JWT_SECRET)
            );
            const decodedTokens =  decodedToken as decodedTokenType;
            //console.log(decodedTokens);
            const currentDispatchOfficer = await DispatchOfficer.findById(decodedTokens.id);
            //console.log(currentDispatchOfficer);
            return { currentDispatchOfficer };
        }
    },
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]

});

export default apolloServer;