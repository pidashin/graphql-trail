import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import { AUTH_TOKEN } from './constants'
import Login from './pages/login'
import { typeDefs, resolvers } from './resolvers'
import gql from 'graphql-tag'

import './global.scss'


const link = new HttpLink({
  headers: { authorization: localStorage.getItem(AUTH_TOKEN) },
  uri: 'http://localhost:4000'
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  typeDefs,
  resolvers,
  link,
  cache,  
})

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem(AUTH_TOKEN),
    cartItems: []
  }
})

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

const Main = () => {
  const { data } = useQuery(IS_LOGGED_IN)
  return data.isLoggedIn ? <App /> : <Login />
}

// injectStyles()

ReactDOM.render(
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
