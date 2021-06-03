import express from 'express'
import { ApolloServer } from 'apollo-server-express'
//schema
import schema from './schema.graphql'
//resolvers
import { resolvers } from './resolvers'

export const app = express()
const server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

server.applyMiddleware({ app });

export { server }