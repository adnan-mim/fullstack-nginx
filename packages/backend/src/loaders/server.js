import {GraphQLServer} from 'graphql-yoga';
import resolvers from '../resolvers'; 
import {prisma} from '../generated/prisma-client';

function createServer() {
    return new GraphQLServer({
      typeDefs: "src/schema.graphql",
      resolvers: resolvers,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      context: (req) => ({ ...req, prisma }),
    });
  }
  
  export default createServer;