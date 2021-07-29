import { ApolloServer, gql } from 'apollo-server';
import app from './app';
import logger from './utils/logger';
import * as dotenv from 'dotenv';
import './utils/env';
//inside your starter code, do this
dotenv.config();

const persons = [
  {
    name: "Arto Hellas",
    phone: "040-123543",
    street: "Tapiolankatu 5 A",
    city: "Espoo",
    id: "3d594650-3436-11e9-bc57-8b80ba54c431"
  },
  {
    name: "Matti Luukkainen",
    phone: "040-432342",
    street: "Malminkaari 10 A",
    city: "Helsinki",
    id: '3d599470-3436-11e9-bc57-8b80ba54c431'
  },
  {
    name: "Venla Ruuska",
    street: "Nallemäentie 22 C",
    city: "Helsinki",
    id: '3d599471-3436-11e9-bc57-8b80ba54c431'
  },
];

const typeDefs = gql`
    type Person {
      name: String!
      phone: String
      street: String!
      city: String! 
      id: ID!
    }
  
    type Query {
      personCount: Int!
      allPersons: [Person!]!
      findPerson(name: String!): Person
    }
  `;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (_root: never, args: { name: string; }) =>
      persons.find(p => p.name === args.name)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

export const parseURI = (URI: unknown): string => {
  if (!URI || !(isString(URI))) {
    throw new Error('Incorrect or missing URI:' + URI);
  }
  return URI;
};
void app(parseURI(process.env.MONGODB_URI));
void server.listen().then(({ url }) => {
  logger.info(`Server ready at ${url}`);
});

