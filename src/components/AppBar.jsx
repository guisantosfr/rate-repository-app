import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    marginTop: Constants.statusBarHeight,  
    backgroundColor: theme.colors.background
  }
});

const AppBarTab = ({ tabName }) => {
  return (
    <Pressable>
      <Text color="textSecondary" fontSize="subheading" fontWeight="bold">{tabName}</Text>
    </Pressable>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab tabName="Repositories"/>
    </View>
  );
};

export default AppBar;