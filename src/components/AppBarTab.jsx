import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';

export const AppBarTab = ({ tabName, to }) => {
    return (
      <Link to={to} style={styles.tab}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">{tabName}</Text>
      </Link>
    )
}

export const AppBarSignOut = ({ onPress }) => {
    return (
      <Pressable onPress={onPress}>
        <Text color="textSecondary" fontSize="subheading" fontWeight="bold">Sign Out</Text>
      </Pressable>
    );
  };

const styles = StyleSheet.create({
    tab:{
        marginHorizontal: 10
    }
})

export default AppBarTab;
  