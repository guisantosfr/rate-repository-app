import { View, StyleSheet } from 'react-native';
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
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const AppBarTab = ({ tabName, to }) => {
  return (
    <Link to={to}>
      <Text color="textSecondary" fontSize="subheading" fontWeight="bold">{tabName}</Text>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab tabName="Repositories" to="/" />
        <AppBarTab tabName="Sign in" to="/signin" />
    </View>
  );
};

export default AppBar;