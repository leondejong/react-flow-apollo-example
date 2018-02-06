// @flow

import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Layout from '../layout/Layout';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

class App extends React.Component<any> {
  render(): ?React$Element<any> {
    return (
      <ApolloProvider client={ client }>
        <Layout />
      </ApolloProvider>
    );
  }
}

export default App;
