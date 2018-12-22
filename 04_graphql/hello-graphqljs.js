'use strict'

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  graphql
} = require('graphql')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      helloWorld: {
        type: GraphQLString,
        resolve () {
          return 'Hola Node En Vivo!'
        }
      }
    }
  })
})

const query = `
  query Hello {
    helloWorld
  }
`

graphql(schema, query).then(result => console.log(result))
