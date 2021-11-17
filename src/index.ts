import { GraphQLServer, PubSub } from 'graphql-yoga';
import * as path from 'path';
import resolvers from './resolvers';

const pubsub = new PubSub();
const server = new GraphQLServer({
  // The existing operations that were retrieved from the schema file
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  // The resolvers implements the actually defined schemas
  resolvers,
  context: { pubsub }
});

server.start(() => console.log('Server is running on localhost:4000!'));