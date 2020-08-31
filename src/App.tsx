import React from 'react'
import { Counter } from './Counter/Counter'
import { CountryName } from './CountryName/CountryName'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
})

export const App = () => (
  <ApolloProvider client={client}>
    <>
      <h1>A nice counter:</h1>
      <Counter />

      <h1>A country name finder:</h1>
      <CountryName />
    </>
  </ApolloProvider>
)
