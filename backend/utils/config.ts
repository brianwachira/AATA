import dotenv from 'dotenv';
// configuring environment variables

dotenv.config;

const PORT = process.env.PORT || 3001;
console.log(process.env.MONGODB_URI);

//set up a type guard ensuring uri mongodb uri is a string
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

export const parseURI = (URI: unknown): string => {
    if(!URI || !isString(URI)){
        throw new Error('Incorrect or missing URI:' + URI);
    }
    return URI;
};
const MONGODB_URI : string  = parseURI(process.env.MONGODB_URI);

export default { PORT, MONGODB_URI};

