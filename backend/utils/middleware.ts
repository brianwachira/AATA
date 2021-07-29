import { Logger } from "tslog";

const logger: Logger = new Logger();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requestLogger = (request: any, _response: any, next: () => void) => {
    logger.info('Method:', request.method);
    logger.info('Path:  ', request.path);
    logger.info('Body:  ', request.body);
    logger.info('---');
    next();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const unknownQuery = (_request: any, response: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    response.status(404).send({ error: 'unknown query' });
};
export default {requestLogger, unknownQuery};