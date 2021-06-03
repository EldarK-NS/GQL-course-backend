import { ApolloError, ApolloServer } from 'apollo-server-express';
//model
import {saveBook, removeBook, updateBook} from './model/index'


export const mutations={
    addBook: (_, { book }) => {
        return saveBook(book)
    },
    removeBook: (_, { id }) => {
        return removeBook(id)
    },
    updateBook: (_, { id, book }) => {
        return updateBook(id,book)
    }
}