import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    marginTop: Constants.statusBarHeight,  
    backgroundColor: theme.colors.background,

    display: 'flex',
    flexDirection: 'row'
  },

  tab:{
    marginHorizontal: 10
  }
});

const AppBarTab = ({ tabName, to }) => {
  return (
    <Link to={to} style={styles.tab}>
      <Text color="textSecondary" fontSize="subheading" fontWeight="bold">{tabName}</Text>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName="Repositories" to="/" />
        <AppBarTab tabName="Sign in" to="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;