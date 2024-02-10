import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'

import theme from '../theme'

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
  const onSubmit = (values) => {
    console.log(values)
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
