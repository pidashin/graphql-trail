const { GraphQLServer, PubSub } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const path = require('path')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutations')
const Mission = require('./resolvers/Mission')
const User = require('./resolvers/User')
const Launch = require('./resolvers/Launch')
const LaunchesQuery = require('./resolvers/LaunchesQuery')

const resolvers = {
  Query,
  Mutation,
  Mission,
  User,
  Launch,
  LaunchesQuery
}

const prisma = new PrismaClient()

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, './schema.graphql'),
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))