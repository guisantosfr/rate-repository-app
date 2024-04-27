import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';
import theme from '../theme';

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit
  });

  return (
    <View style={styles.container}>
    <View style={styles.wrapper}>
      <TextInput
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={styles.input}
      />

      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
        style={styles.input}
      />

      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="textSecondary" fontWeight="bold">Sign in</Text>
      </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit}/>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryBackground,
    paddingVertical: 10,

    display: 'flex',
    alignItems: 'center'
  },

  wrapper:{
    width: '90%'
  },

  input:{
    color: theme.colors.mainBackground,

    borderWidth: 1,
    borderColor: theme.colors.mainBackground,
    borderRadius: 5,

    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,

    display: 'flex',
    alignItems: 'center'
  }

})

export default SignIn;