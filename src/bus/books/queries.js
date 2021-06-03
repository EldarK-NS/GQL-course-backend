import { ApolloError, ApolloServer } from 'apollo-server-express';
//model
import { getBooks, getBookById, } from './model/index'

export const queries = {
    books: () => getBooks(),
    book: (_, { id }) => {
        try {
            return getBookById(id)

        } catch ({ message }) {
            throw new ApolloError(message)
        }
    }
}