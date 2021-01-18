import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Characters from './Characters'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Rick and Morty Apollo Client / GraphQL</h2>
        <Characters />
      </div>
    </ApolloProvider>
  );
}

export default App;
