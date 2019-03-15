'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')
const express = require('express')
const { ApolloServer, gql, PubSub } = require('apollo-server-express')

const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
const typeDefs = gql(schema)
const pubSub = new PubSub()

const USER_CREATED = "USER_CREATED"

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
    async users(root, args, ctx, info) {
      const { status } = args
      return !status ? users : users.filter(u => u.status === status)
    }
  },
  Mutation: {
    createUser(root, args, ctx, info) {
      const { user } = args
      users.push(user)
      pubSub.publish(USER_CREATED, { userCreated: user })
      return user
    }
  },
  Subscription: {
    userCreated: {
      subscribe: () => pubSub.asyncIterator(USER_CREATED)
    }
  }
}

const app = express()
const httpServer = http.createServer(app)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  tracing: true,
})

server.applyMiddleware({ app })

server.installSubscriptionHandlers(httpServer)

const PORT = '8800'

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})
