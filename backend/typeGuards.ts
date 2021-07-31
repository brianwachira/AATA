/**
 * 
 * @description holds type guards  
 */


/**
 * checks if a valur is a string
 * @param text unknown
 * @returns {typeofString} String
 */
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

/**
 * returns string
 * @param anyString unkniwn
 * @returns {string} String
 */
export const parseString = (anyString: unknown): string => {
    if (!anyString || !(isString(anyString))) {
        throw new Error('Incorrect or missing string:' + anyString);
    }
    return anyString;
};