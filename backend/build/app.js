"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import config from './utils/config';
const logger_1 = __importDefault(require("./utils/logger"));
const mongoose_1 = __importDefault(require("mongoose"));
const tslog_1 = require("tslog");
const app = (MONGODB_URI) => {
    const log = new tslog_1.Logger();
    log.info('connecting to ', MONGODB_URI);
    mongoose_1.default.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(() => {
        log.info('connected to MongoDB');
    })
        .catch((error) => {
        logger_1.default.error('error connection to MongoDB:', error.message);
    });
};
exports.default = app;
