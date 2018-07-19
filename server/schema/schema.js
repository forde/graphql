const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
let books = [
    { name: 'Moby dick', genre: 'Tale', id: '1' },
    { name: 'New city', genre: 'Fantasy', id: '2' },
    { name: 'The unusual tale', genre: 'Novel', id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { 
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        }
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                // get data from DB
                return _.find(books, { id: args.id });
            }
        }
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery
});