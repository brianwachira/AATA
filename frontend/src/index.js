import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import bootstrap
import 'bootstrap/dist/js/bootstrap.js';

import {
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://aata-backend.herokuapp.com/playground',
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

