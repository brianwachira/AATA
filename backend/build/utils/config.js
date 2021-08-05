"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseURI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// configuring environment variables
dotenv_1.default.config;
const PORT = process.env.PORT || 3001;
console.log(process.env.MONGODB_URI);
//set up a type guard ensuring uri mongodb uri is a string
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseURI = (URI) => {
    if (!URI || !isString(URI)) {
        throw new Error('Incorrect or missing URI:' + URI);
    }
    return URI;
};
exports.parseURI = parseURI;
const MONGODB_URI = exports.parseURI(process.env.MONGODB_URI);
exports.default = { PORT, MONGODB_URI };
