import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const { apolloUri } = Constants.expoConfig.extra;

const httpLink = createHttpLink({ uri: apolloUri });

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();

      const modifiedHeaders = {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      }

      return { headers: modifiedHeaders };

    } catch (e) {
      console.error(e);
      return { headers };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;