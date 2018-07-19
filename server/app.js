const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // http://localhost:4000/graphql
}));

app.listen(4000, () => {
    console.log('listening on :4000');
});