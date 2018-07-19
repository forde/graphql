const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

// connect to mlab database
const dbUser = 'graphql';
const dbPass = 'graphql800klastergros';
mongoose.connect(`mongodb://${dbUser}:${dbPass}@ds243931.mlab.com:43931/graphql`, { useNewUrlParser: true } );
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // http://localhost:4000/graphql
}));

app.listen(4000, () => {
    console.log('server is listening on port :4000');
});