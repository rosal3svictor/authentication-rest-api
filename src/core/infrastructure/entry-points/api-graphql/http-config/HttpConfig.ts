import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

// https://graphql.org/graphql-js/running-an-express-graphql-server/

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!'
  }
}

const HttpConfig = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
})

export default HttpConfig
