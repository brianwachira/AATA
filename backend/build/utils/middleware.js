"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslog_1 = require("tslog");
const logger = new tslog_1.Logger();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requestLogger = (request, _response, next) => {
    logger.info('Method:', request.method);
    logger.info('Path:  ', request.path);
    logger.info('Body:  ', request.body);
    logger.info('---');
    next();
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const unknownQuery = (_request, response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    response.status(404).send({ error: 'unknown query' });
};
exports.default = { requestLogger, unknownQuery };
