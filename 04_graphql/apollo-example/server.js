'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()
const server = http.createServer(app)

const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
const typeDefs = gql(schema)

const users = [
  {
    name: 'Aleja',
    email: 'aleja1@pmail.com',
    age: 25,
    status: 'ACTIVE'
  }, {
    name: 'Julian',
    email: 'envivo@nodejs.com',
    age: 34,
    status: 'SUSPENDED'
  }
]

const resolvers = {
  Query: {
    async users (root, args, ctx, info) {
      const { status } = args
      return users.filter(u => u.status === status)
    }
  },
  Mutation: {
    createUser (root, args, ctx, info) {
      const { user } = args
      users.push(user)
      return user
    }
  }
}

const api = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  tracing: true
})

api.applyMiddleware({
  app,
  path: '/api'
})

server.listen(8800, () => {
  console.log(`Server listening on http://localhost:8800/api`)
})
