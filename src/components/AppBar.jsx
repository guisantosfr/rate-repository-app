import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import useMe from '../hooks/useMe';

import theme from '../theme';
import { AppBarTab, AppBarSignOut } from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    marginTop: Constants.statusBarHeight,  
    backgroundColor: theme.colors.background,

    display: 'flex',
    flexDirection: 'row'
  }
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const { me } = useMe();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await client.resetStore();
    navigate('/signIn');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Repositories" to="/" />

        {
          me && me.username ? (
            <AppBarSignOut onPress={handleSignOut}/>
          ) : (
            <AppBarTab tabName="Sign in" to="/signin" />
          )
        }

      </ScrollView>
    </View>
  );
};

export default AppBar;