import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  // TODO backend api endpoint => retrieve from
  // (e.g.) env variables or global configs
  uri: 'https://dpq3s.sse.codesandbox.io/',
});
