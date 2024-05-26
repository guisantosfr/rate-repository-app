import { Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

import Text from './Text';
import TextInput from './TextInput';
import theme from '../theme';

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
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
        error={formik.touched.username && formik.errors.username}
      />
      {
        formik.touched.username && formik.errors.username && (
          <Text style={{ color: theme.colors.error }}>{formik.errors.username}</Text>
        )
      }

      <TextInput
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry
        style={styles.input}
        error={formik.touched.password && formik.errors.password}
      />
      {
        formik.touched.password && formik.errors.password && (
          <Text style={{ color: theme.colors.error }}>{formik.errors.password}</Text>
        )
      }

      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text color="textSecondary" fontWeight="bold">Sign in</Text>
      </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
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
  },

  error:{
    borderColor: theme.colors.error
  }

})

export default SignIn;