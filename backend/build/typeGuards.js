"use strict";
/**
 *
 * @description holds type guards
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseString = void 0;
/**
 * checks if a valur is a string
 * @param text unknown
 * @returns {typeofString} String
 */
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
/**
 * returns string
 * @param anyString unkniwn
 * @returns {string} String
 */
const parseString = (anyString) => {
    if (!anyString || !(isString(anyString))) {
        throw new Error('Incorrect or missing string:' + anyString);
    }
    return anyString;
};
exports.parseString = parseString;
