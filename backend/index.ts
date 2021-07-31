import app from './app';
import logger from './utils/logger';
import * as dotenv from 'dotenv';
import './utils/env';
import apolloServer from './graphql';
import { parseString } from './typeGuards';

/**
 * @description holds server main
 */

//inside your starter code, do this
dotenv.config();

void app(parseString(process.env.MONGODB_URI));

void apolloServer.listen().then(({ url }) => {
  logger.info(`Server ready at ${url}`);
});

