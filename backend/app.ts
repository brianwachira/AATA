//import config from './utils/config';
import logger from './utils/logger';
import mongoose from 'mongoose';
import { Logger } from "tslog";

const app = (MONGODB_URI : string) => {

    const log: Logger = new Logger();

    log.info('connecting to ', MONGODB_URI);
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(() => {
            log.info('connected to MongoDB');
        })
        .catch((error) => {
            logger.error('error connection to MongoDB:', error.message);
        });
};

export default app;


