"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const info = (...params) => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(...params);
    }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const error = (...params) => {
    if (process.env.NODE_ENV !== 'test') {
        console.error(...params);
    }
};
exports.default = {
    info, error
};
