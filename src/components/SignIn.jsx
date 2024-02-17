import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'

import theme from '../theme'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
  formContainer: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.light,
  },
  submitButton: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  submitText: {
    color: theme.colors.light,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />

      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'Username must be at least 6 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

const SignIn = () => {
  const navigate = useNavigate()
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const data = await signIn({ username, password })

      if (data.authenticate.accessToken) {
        navigate('/')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
