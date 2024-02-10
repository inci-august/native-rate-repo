import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  input: {
    padding: theme.spacing.medium,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.medium,
    fontSize: theme.fontSizes.body,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
  },
  redBorder: {
    borderColor: theme.colors.error,
  },
})

const TextInput = ({ error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.redBorder]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
