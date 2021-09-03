import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

const uri = process.env.REACT_APP_BACKEND_API;

const httpLink = new HttpLink({ uri });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
