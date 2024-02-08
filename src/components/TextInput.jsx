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
})

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.input, style]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
