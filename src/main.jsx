import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://petgram-backend-one.now.sh/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
